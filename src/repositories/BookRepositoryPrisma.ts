import {
    getBooks,
    getBookById as getBook,
    getBookByTitle as findByTitle,
    addBook as createBook,
    prisma
} from '../lib/prisma';
import type { Book } from '../models/Book';


// Book queries
export function getAllBooks() {
  return prisma.book.findMany({
    include: {
      author: {
        select: {
          name: true,
          surname: true
        }
      }
    }
  });
}

export function getBookByTitle(title: string) {
  return prisma.book.findMany({
    where: {
      title: {
        contains: title,
        mode: 'insensitive'
      }
    },
    include: {
      author: {
        select: {
          name: true,
          surname: true
        }
      }
    }
  });
}

export function getBookById(id: number) {
  return prisma.book.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          name: true,
          surname: true
        }
      }
    }
  });
}

export function addBook(data: { title: string; isbn: string; category: string; authorId: number }) {
  return prisma.book.create({
    data,
    include: {
      author: {
        select: {
          name: true,
          surname: true
        }
      }
    }
  });
}