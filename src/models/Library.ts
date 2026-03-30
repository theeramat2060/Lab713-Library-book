export interface Author {
  id: number;
  name: string;
  surname: string;
  affiliation: string;
}

export interface Book {
  id: number;
  title: string;
  isbn: string;
  category: string;
  authorId: number;
  author?: {
    name: string;
    surname: string;
  };
}

export interface Member {
  id: number;
  memberId: string;
  name: string;
  surname: string;
  phone: string;
}

export interface BorrowRecord {
  id: number;
  memberId: number;
  bookId: number;
  borrowDate: Date;
  dueDate: Date;
  returnDate: Date | null;
}
