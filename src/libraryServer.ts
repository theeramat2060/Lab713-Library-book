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

    if (authors.length === 0) {
      res.status(404).json({ error: 'No authors found' });
      return;
    }

    res.json(authors);
  } catch (error: any) {
    console.error('Error in GET /authors:', error);
    res.status(500).json({ error: 'Internal Server Error. Failed to fetch authors' });
  } finally {
    console.log(`[GET /authors] Request completed`);
  }
});

app.get('/authors/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id) || id < 1) {
      res.status(400).json({ error: 'Invalid author ID. Must be a positive integer' });
      return;
    }

    const author = await libraryService.getAuthorById(id);
    
    if (!author) {
      res.status(404).json({ error: 'Author not found' });
      return;
    }

    res.json(author);
  } catch (error: any) {
    console.error('Error in GET /authors/:id:', error);
    res.status(500).json({ error: 'Internal Server Error. Failed to fetch author' });
  } finally {
    const id = req.params.id;
    console.log(`[GET /authors/:id] Request completed. id=${id}`);
  }
});

// Members endpoints
app.get('/members/search', async (req: Request, res: Response) => {
  try {
    if (!req.query.name) {
      res.status(400).json({ error: 'Name query parameter required' });
      return;
    }
    
    const name = req.query.name as string;
    const members = await libraryService.getMemberByName(name);
    
    if (members.length === 0) {
      res.status(404).json({ error: 'No members found with that name' });
      return;
    }

    res.json(members);
  } catch (error: any) {
    console.error('Error in GET /members/search:', error);
    res.status(500).json({ error: 'Internal Server Error. Failed to search members' });
  } finally {
    const name = req.query.name as string;
    console.log(`[GET /members/search] Request completed. name="${name}"`);
  }
});

app.get('/members/:memberId', async (req: Request, res: Response) => {
  try {
    const memberId = req.params.memberId;
    
    if (!memberId || memberId.trim() === '') {
      res.status(400).json({ error: 'Invalid member ID. Must be provided' });
      return;
    }

    const member = await libraryService.getMemberById(memberId);
    
    if (!member) {
      res.status(404).json({ error: 'Member not found' });
      return;
    }

    res.json(member);
  } catch (error: any) {
    console.error('Error in GET /members/:memberId:', error);
    res.status(500).json({ error: 'Internal Server Error. Failed to fetch member' });
  } finally {
    const memberId = req.params.memberId;
    console.log(`[GET /members/:memberId] Request completed. memberId="${memberId}"`);
  }
});

// Borrow record endpoints
app.get('/borrow-records/due-on-date', async (req: Request, res: Response) => {
  try {
    if (!req.query.date) {
      res.status(400).json({ error: 'Date query parameter required (format: YYYY-MM-DD)' });
      return;
    }
    
    const date = req.query.date as string;
    
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD' });
      return;
    }

    const records = await libraryService.getBooksDueOnDate(date);
    
    if (records.length === 0) {
      res.status(404).json({ error: 'No books due on the specified date' });
      return;
    }

    res.json(records);
  } catch (error: any) {
    console.error('Error in GET /borrow-records/due-on-date:', error);
    res.status(500).json({ error: 'Internal Server Error. Failed to fetch borrow records' });
  } finally {
    const date = req.query.date as string;
    console.log(`[GET /borrow-records/due-on-date] Request completed. date="${date}"`);
  }
});

app.get('/borrow-records/unreturned', async (req: Request, res: Response) => {
  try {
    const records = await libraryService.getUnreturnedBooks();
    
    if (records.length === 0) {
      res.status(404).json({ error: 'No unreturned books found' });
      return;
    }

    res.json(records);
  } catch (error: any) {
    console.error('Error in GET /borrow-records/unreturned:', error);
    res.status(500).json({ error: 'Internal Server Error. Failed to fetch unreturned books' });
  } finally {
    console.log(`[GET /borrow-records/unreturned] Request completed`);
  }
});

app.listen(port, () => {
  console.log(`Library Server running on http://localhost:${port}`);
});
