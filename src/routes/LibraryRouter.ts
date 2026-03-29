import express, { Request, Response } from 'express';
import * as libraryService from '../services/LibraryService.js';

const router = express.Router();

// Get all books or search with pagination
router.get('/', async (req: Request, res: Response) => {
  try {
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const pageNo = parseInt(req.query.pageNo as string) || 1;
    const keyword = (req.query.keyword as string) || '';

    if (keyword) {
      // Complex search with pagination
      const result = await libraryService.getBooksByKeywordWithPagination(keyword, pageSize, pageNo);
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

    res.setHeader('x-total-count', totalBooks.toString());
    res.json(paginatedBooks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// Search book by title
router.get('/search', async (req: Request, res: Response) => {
  try {
    if (!req.query.title) {
      return res.status(400).json({ error: 'Title query parameter required' });
    }
    const title = req.query.title as string;
    const books = await libraryService.getBookByTitle(title);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search books' });
  }
});

// Get specific book by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const book = await libraryService.getBookById(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
});

// Add new book
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, isbn, category, authorId } = req.body;
    if (!title || !isbn || !category || !authorId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const book = await libraryService.addBook({ title, isbn, category, authorId });
    res.json({ message: 'Book added successfully', data: book });
  } catch (error: any) {
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'ISBN already exists' });
    } else {
      res.status(500).json({ error: 'Failed to add book' });
    }
  }
});

export default router;
