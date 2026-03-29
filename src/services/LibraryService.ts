import * as repo from '../repositories/LibraryRepository.js';
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
