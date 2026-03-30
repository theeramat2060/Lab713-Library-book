import { prisma } from '../lib/prisma.js';
import { Prisma } from '../generated/prisma/index.js';

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

// Pagination with complex search (Homework 2)
export async function getBooksByKeywordWithPagination(
  keyword: string,
  pageSize: number,
  pageNo: number
) {
  const where = {
    OR: [
      {
        title: {
          contains: keyword,
          mode: Prisma.QueryMode.insensitive
        }
      },
      {
        category: {
          contains: keyword,
          mode: Prisma.QueryMode.insensitive
        }
      },
      {
        author: {
          OR: [
            {
              name: {
                contains: keyword,
                mode: Prisma.QueryMode.insensitive
              }
            },
            {
              surname: {
                contains: keyword,
                mode: Prisma.QueryMode.insensitive
              }
            }
          ]
        }
      },
      {
        borrowRecords: {
          some: {
            member: {
              name: {
                contains: keyword,
                mode: Prisma.QueryMode.insensitive
              }
            }
          }
        }
      },
      {
        borrowRecords: {
          some: {
            member: {
              surname: {
                contains: keyword,
                mode: Prisma.QueryMode.insensitive
              }
            }
          }
        }
      }
    ]
  };

  const books = await prisma.book.findMany({
    where,
    skip: pageSize * (pageNo - 1),
    take: pageSize,
    include: {
      author: {
        select: {
          name: true,
          surname: true
        }
      }
    }
  });

  const count = await prisma.book.count({ where });

  return { count, books };
}

// Count all books
export function countBooks() {
  return prisma.book.count();
}

// Count books matching search
export function countBooksByKeyword(keyword: string) {
  return prisma.book.count({
    where: {
      OR: [
        {
          title: {
            contains: keyword,
            mode: Prisma.QueryMode.insensitive
          }
        },
        {
          category: {
            contains: keyword,
            mode: Prisma.QueryMode.insensitive
          }
        },
        {
          author: {
            OR: [
              {
                name: {
                  contains: keyword,
                  mode: Prisma.QueryMode.insensitive
                }
              },
              {
                surname: {
                  contains: keyword,
                  mode: Prisma.QueryMode.insensitive
                }
              }
            ]
          }
        },
        {
          borrowRecords: {
            some: {
              member: {
                name: {
                  contains: keyword,
                  mode: Prisma.QueryMode.insensitive
                }
              }
            }
          }
        },
        {
          borrowRecords: {
            some: {
              member: {
                surname: {
                  contains: keyword,
                  mode: Prisma.QueryMode.insensitive
                }
              }
            }
          }
        }
      ]
    }
  });
}


export function getAllAuthors() {
  return prisma.author.findMany({
    include: {
      books: {
        select: {
          id: true,
          title: true,
          isbn: true,
          category: true
        }
      }
    }
  });
}

export function getAuthorById(id: number) {
  return prisma.author.findUnique({
    where: { id },
    include: {
      books: {
        select: {
          id: true,
          title: true,
          isbn: true,
          category: true
        }
      }
    }
  });
}

// Member queries
export function getMemberByName(name: string) {
  return prisma.member.findMany({
    where: {
      name: {
        contains: name,
        mode: 'insensitive'
      }
    },
    include: {
      borrowRecords: {
        include: {
          book: {
            include: {
              author: {
                select: {
                  name: true,
                  surname: true
                }
              }
            }
          }
        }
      }
    }
  });
}

export function getMemberById(memberId: string) {
  return prisma.member.findUnique({
    where: { memberId },
    include: {
      borrowRecords: {
        include: {
          book: {
            include: {
              author: {
                select: {
                  name: true,
                  surname: true
                }
              }
            }
          }
        }
      }
    }
  });
}

export function getBooksDueOnDate(date: string) {
  const targetDate = new Date(date);
  const nextDay = new Date(targetDate);
  nextDay.setDate(nextDay.getDate() + 1);

  return prisma.borrowRecord.findMany({
    where: {
      dueDate: {
        gte: targetDate,
        lt: nextDay
      }
    },
    include: {
      book: {
        include: {
          author: {
            select: {
              name: true,
              surname: true
            }
          }
        }
      },
      member: {
        select: {
          memberId: true,
          name: true,
          surname: true
        }
      }
    }
  });
}

export function getUnreturnedBooks() {
  return prisma.borrowRecord.findMany({
    where: {
      returnDate: null
    },
    include: {
      book: {
        include: {
          author: {
            select: {
              name: true,
              surname: true
            }
          }
        }
      },
      member: {
        select: {
          memberId: true,
          name: true,
          surname: true
        }
      }
    }
  });
}
