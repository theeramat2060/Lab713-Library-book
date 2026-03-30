import express, { Request, Response } from 'express';
import * as libraryService from '../services/LibraryService.js';

const router = express.Router();

// Get all books or search with pagination
router.get('/', async (req: Request, res: Response) => {
  try {
    let pageSize = 10;
    let pageNo = 1;
    
    // Parse pageSize and pageNo, handling 0 values correctly
    if (req.query.pageSize !== undefined) {
      const parsedPageSize = parseInt(req.query.pageSize as string);
      if (!isNaN(parsedPageSize)) {
        pageSize = parsedPageSize;
      }
    }
    if (req.query.pageNo !== undefined) {
      const parsedPageNo = parseInt(req.query.pageNo as string);
      if (!isNaN(parsedPageNo)) {
        pageNo = parsedPageNo;
      }
    }
    
    const keyword = (req.query.keyword as string) || '';

    // Task 14: Validate pagination parameters
    if (pageNo < 1 || pageSize < 1) {
      res.status(400).json({ error: 'Invalid pageNo or pageSize. Must be >= 1' });
      return;
    }

    if (keyword) {
      // Complex search with pagination
      const result = await libraryService.getBooksByKeywordWithPagination(keyword, pageSize, pageNo);
      
      // Task 13: Return 404 if no results found
      if (result.books.length === 0) {
        res.status(404).json({ error: 'No books found matching your search' });
        return;
      }

      res.setHeader('x-total-count', result.count.toString());
      return res.json(result.books);
    }

    // Get all books with pagination
    const allBooks = await libraryService.getAllBooks();
    const totalBooks = allBooks.length;
    const paginatedBooks = allBooks.slice(
      pageSize * (pageNo - 1),
      pageSize * pageNo
    );

    // Task 13: Return 404 if pagination exceeds available data
    if (paginatedBooks.length === 0 && totalBooks > 0) {
      res.status(404).json({ error: 'Page number exceeds available data' });
      return;
    }

    res.setHeader('x-total-count', totalBooks.toString());
    res.json(paginatedBooks);
  } catch (error: any) {
    // Task 14: Detailed error handling
    console.error('Error in GET /books:', error);
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'Invalid search parameters' });
    } else {
      res.status(500).json({ error: 'Internal Server Error. Please try again later' });
    }
  } finally {
    // Task 15: Log request completion
    let pageSize = 10;
    let pageNo = 1;
    if (req.query.pageSize !== undefined) {
      const p = parseInt(req.query.pageSize as string);
      if (!isNaN(p)) pageSize = p;
    }
    if (req.query.pageNo !== undefined) {
      const p = parseInt(req.query.pageNo as string);
      if (!isNaN(p)) pageNo = p;
    }
    const keyword = (req.query.keyword as string) || '';
    console.log(`[GET /books] Request completed. pageNo=${pageNo}, pageSize=${pageSize}, keyword="${keyword}"`);
  }
});

// Search book by title
router.get('/search', async (req: Request, res: Response) => {
  try {
    if (!req.query.title) {
      res.status(400).json({ error: 'Title query parameter required' });
      return;
    }
    const title = req.query.title as string;
    const books = await libraryService.getBookByTitle(title);
    
    // Task 13: Return 404 if no books found
    if (books.length === 0) {
      res.status(404).json({ error: 'No books found with that title' });
      return;
    }

    res.json(books);
  } catch (error: any) {
    // Task 14: Detailed error handling
    console.error('Error in GET /books/search:', error);
    res.status(500).json({ error: 'Internal Server Error. Failed to search books' });
  } finally {
    // Task 15: Log request completion
    const title = req.query.title as string;
    console.log(`[GET /books/search] Request completed. title="${title}"`);
  }
});

// Get specific book by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    
    // Task 14: Validate ID parameter
    if (isNaN(id) || id < 1) {
      res.status(400).json({ error: 'Invalid book ID. Must be a positive integer' });
      return;
    }

    const book = await libraryService.getBookById(id);
    
    // Task 13: Return 404 if book not found
    if (!book) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }

    res.json(book);
  } catch (error: any) {
    // Task 14: Detailed error handling
    console.error('Error in GET /books/:id:', error);
    res.status(500).json({ error: 'Internal Server Error. Failed to fetch book' });
  } finally {
    // Task 15: Log request completion
    const id = req.params.id;
    console.log(`[GET /books/:id] Request completed. id=${id}`);
  }
});

// Add new book
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, isbn, category, authorId } = req.body;
    
    // Task 14: Validate required fields
    if (!title || !isbn || !category || !authorId) {
      res.status(400).json({ error: 'Missing required fields: title, isbn, category, authorId' });
      return;
    }

    // Task 14: Validate authorId is a number
    if (typeof authorId !== 'number' || authorId < 1) {
      res.status(400).json({ error: 'Invalid authorId. Must be a positive integer' });
      return;
    }

    const book = await libraryService.addBook({ title, isbn, category, authorId });
    res.status(201).json({ message: 'Book added successfully', data: book });
  } catch (error: any) {
    // Task 14: Detailed error handling with specific error codes
    console.error('Error in POST /books:', error);
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'ISBN already exists. Please use a unique ISBN' });
    } else if (error.code === 'P2025') {
      res.status(404).json({ error: 'Author not found. Invalid authorId' });
    } else {
      res.status(500).json({ error: 'Internal Server Error. Failed to add book' });
    }
  } finally {
    // Task 15: Log request completion
    const { title } = req.body;
    console.log(`[POST /books] Request completed. title="${title}"`);
  }
});

export default router;
