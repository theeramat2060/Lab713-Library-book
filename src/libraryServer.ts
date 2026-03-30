import express, { Request, Response } from 'express';
import path from 'path';
import cors, { CorsOptions } from 'cors';
import multer from 'multer';
import libraryRouter from './routes/LibraryRouter.js';
import * as libraryService from './services/LibraryService.js';
import { uploadFile, getPresignedUrl } from './services/UploadFileService.js';

const app = express();
const port = 4000;
const webPort = 5050;

// CORS configuration (Task 2)
const corsOptions: CorsOptions = {
  origin: ['http://localhost:5050'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

// Task 3: Multer configuration for file uploads
const upload = multer({ storage: multer.memoryStorage() });

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

// Task 3: File upload endpoint
app.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).send('No file uploaded.');
      return;
    }

    const bucket = process.env.SUPABASE_BUCKET_NAME || 'images';
    const uploadDir = process.env.UPLOAD_DIR || 'uploads';
    const fileKey = await uploadFile(bucket, uploadDir, file);

    res.status(200).send(fileKey);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file.');
  } finally {
    console.log('[POST /upload] Request completed');
  }
});

// Task 4: Presigned URL endpoint
app.get('/presignedUrl', async (req: Request, res: Response) => {
  try {
    const { key } = req.query;
    if (!key || typeof key !== 'string') {
      res.status(400).send('File key is required.');
      return;
    }

    const bucket = process.env.SUPABASE_BUCKET_NAME || 'images';
    const presignedUrl = await getPresignedUrl(bucket, key, 3600);

    res.status(200).json({ url: presignedUrl });
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    res.status(500).send('Error generating presigned URL.');
  } finally {
    console.log('[GET /presignedUrl] Request completed');
  }
});

// Web server for serving test HTML page (Task 2)
const webApp = express();
webApp.use(express.static(path.join(process.cwd())));
webApp.listen(webPort, () => {
  console.log(`WebApp listening at http://localhost:${webPort}`);
});

app.listen(port, () => {
  console.log(`Library Server running on http://localhost:${port}`);
});
