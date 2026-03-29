import express, { Request, Response } from 'express';
import libraryRouter from './routes/LibraryRouter.js';
import * as libraryService from './services/LibraryService.js';

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Library Management System API' });
});

// Books routes with pagination and complex search (Homework 2)
app.use('/books', libraryRouter);

// Authors endpoints
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

// Members endpoints
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
