import { prisma } from '../lib/prisma.js';


// Author queries
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
