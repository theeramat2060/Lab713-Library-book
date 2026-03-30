import * as repo from '../repositories/LibraryRepository.js';

// Book services
export function getAllBooks() {
  return repo.getAllBooks();
}

export function getBookByTitle(title: string) {
  return repo.getBookByTitle(title);
}

export function getBookById(id: number) {
  return repo.getBookById(id);
}

export function addBook(data: { title: string; isbn: string; category: string; authorId: number }) {
  return repo.addBook(data);
}

// Pagination with search (Homework 2)
export function getBooksByKeywordWithPagination(keyword: string, pageSize: number, pageNo: number) {
  return repo.getBooksByKeywordWithPagination(keyword, pageSize, pageNo);
}

export function countBooks() {
  return repo.countBooks();
}

export function countBooksByKeyword(keyword: string) {
  return repo.countBooksByKeyword(keyword);
}

// Author services
export function getAllAuthors() {
  return repo.getAllAuthors();
}

export function getAuthorById(id: number) {
  return repo.getAuthorById(id);
}

// Member services
export function getMemberByName(name: string) {
  return repo.getMemberByName(name);
}

export function getMemberById(memberId: string) {
  return repo.getMemberById(memberId);
}

// Borrow record services
export function getBooksDueOnDate(date: string) {
  return repo.getBooksDueOnDate(date);
}

export function getUnreturnedBooks() {
  return repo.getUnreturnedBooks();
}
