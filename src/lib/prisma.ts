import 'dotenv/config';
import { Client } from 'pg';

// Direct PostgreSQL connection
const connectionString = process.env.DATABASE_URL || 'postgres://admin:admin123@localhost:5432/book?schema=public';
const client = new Client({ connectionString });

export async function getBooks() {
    await client.connect();
    const result = await client.query('SELECT * FROM book');
    await client.end();
    return result.rows;
}

export async function getBookById(id: number) {
    await client.connect();
    const result = await client.query('SELECT * FROM book WHERE id = $1', [id]);
    await client.end();
    return result.rows[0] || null;
}

export async function getBookByTitle(title: string) {
    await client.connect();
    const result = await client.query('SELECT * FROM book WHERE title = $1', [title]);
    await client.end();
    return result.rows;
}

export async function addBook(book: any) {
    await client.connect();
    const result = await client.query(
        'INSERT INTO book (title, isbn, category, "authorId") VALUES ($1, $2, $3, $4) RETURNING *',
        [book.title, book.isbn, book.category, book.authorId]
    );
    await client.end();
    return result.rows[0];
}
