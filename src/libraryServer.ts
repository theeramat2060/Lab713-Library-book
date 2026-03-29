import express, { Request, Response } from 'express';
import * as libraryService from './services/LibraryService.js';
import * as bookService from './services/BookService.js';
const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Library Management System API' });
});

// Book endpoints
app.get('/books', async (req: Request, res: Response) => {
  try {
    if (req.query.title) {
      const title = req.query.title as string;
      const books = await bookService.getBookByTitle(title);
      return res.json(books);
    }
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

app.get('/books/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const book = await bookService.getBookById(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
});

app.post('/books', async (req: Request, res: Response) => {
  try {
    const { title, isbn, category, authorId } = req.body;
    if (!title || !isbn || !category || !authorId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const book = await bookService.addBook({ title, isbn, category, authorId });
    res.json({ message: 'Book added successfully', data: book });
  } catch (error: any) {
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'ISBN already exists' });
    } else {
      res.status(500).json({ error: 'Failed to add book' });
    }
  }
});

// Author endpoints
app.get('/authors', async (req: Request, res: Response) => {
  try {
    const authors = await libraryService.getAllAuthors();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch authors' });
  }
});

app.get('/authors/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const author = await libraryService.getAuthorById(id);
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch author' });
  }
});

// Member endpoints
app.get('/members/search', async (req: Request, res: Response) => {
  try {
    if (req.query.name) {
      const name = req.query.name as string;
      const members = await libraryService.getMemberByName(name);
      return res.json(members);
    }
    res.status(400).json({ error: 'Name query parameter required' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to search members' });
  }
});

app.get('/members/:memberId', async (req: Request, res: Response) => {
  try {
    const memberId = req.params.memberId;
    const member = await libraryService.getMemberById(memberId);
    if (member) {
      res.json(member);
    } else {
      res.status(404).json({ error: 'Member not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch member' });
  }
});

// Borrow record endpoints
app.get('/borrow-records/due-on-date', async (req: Request, res: Response) => {
  try {
    if (!req.query.date) {
      return res.status(400).json({ error: 'Date query parameter required (YYYY-MM-DD)' });
    }
    const date = req.query.date as string;
    const records = await libraryService.getBooksDueOnDate(date);
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch borrow records' });
  }
});

app.get('/borrow-records/unreturned', async (req: Request, res: Response) => {
  try {
    const records = await libraryService.getUnreturnedBooks();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch unreturned books' });
  }
});

app.listen(port, () => {
  console.log(`Library Server running on http://localhost:${port}`);
});
