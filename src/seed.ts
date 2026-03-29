import { prisma } from './lib/prisma';

export async function createAuthors() {
  const authors = [
    {
      name: 'John',
      surname: 'Doe',
      affiliation: 'Chiang Mai University'
    },
    {
      name: 'Jane',
      surname: 'Smith',
      affiliation: 'Chiang Mai University'
    },
    {
      name: 'Bob',
      surname: 'Johnson',
      affiliation: 'CAMT'
    },
    {
      name: 'Alice',
      surname: 'Williams',
      affiliation: 'Bangkok University'
    }
  ];

  for (const author of authors) {
    await prisma.author.create({
      data: author
    });
  }
  console.log('Authors created');
}

export async function createBooks() {
  const books = [
    {
      title: 'TypeScript Handbook',
      isbn: '978-0-321-78957-5',
      category: 'Programming',
      authorId: 1
    },
    {
      title: 'JavaScript: The Good Parts',
      isbn: '978-0-596-51774-8',
      category: 'Programming',
      authorId: 2
    },
    {
      title: 'Clean Code',
      isbn: '978-0-13-235088-4',
      category: 'Software Engineering',
      authorId: 3
    },
    {
      title: 'Design Patterns',
      isbn: '978-0-201-63361-0',
      category: 'Software Design',
      authorId: 4
    },
    {
      title: 'Database Design',
      isbn: '978-0-13-187341-0',
      category: 'Databases',
      authorId: 1
    },
    {
      title: 'Web Development with Node.js',
      isbn: '978-1-491-95882-8',
      category: 'Web Development',
      authorId: 2
    }
  ];

  for (const book of books) {
    await prisma.book.create({
      data: book
    });
  }
  console.log('Books created');
}

export async function createMembers() {
  const members = [
    {
      memberId: 'M001',
      name: 'Somsak',
      surname: 'Prasad',
      phone: '0812345678'
    },
    {
      memberId: 'M002',
      name: 'Niran',
      surname: 'Kumar',
      phone: '0823456789'
    },
    {
      memberId: 'M003',
      name: 'Somchai',
      surname: 'Suwanchote',
      phone: '0834567890'
    },
    {
      memberId: 'M004',
      name: 'Noi',
      surname: 'Sirinuay',
      phone: '0845678901'
    },
    {
      memberId: 'M005',
      name: 'Yai',
      surname: 'Tongmun',
      phone: '0856789012'
    }
  ];

  for (const member of members) {
    await prisma.member.create({
      data: member
    });
  }
  console.log('Members created');
}

export async function createBorrowRecords() {
  const records = [
    {
      memberId: 1,
      bookId: 1,
      borrowDate: new Date('2025-03-20'),
      dueDate: new Date('2025-04-20'),
      returnDate: null
    },
    {
      memberId: 1,
      bookId: 2,
      borrowDate: new Date('2025-03-21'),
      dueDate: new Date('2025-04-21'),
      returnDate: new Date('2025-03-28')
    },
    {
      memberId: 2,
      bookId: 3,
      borrowDate: new Date('2025-03-22'),
      dueDate: new Date('2025-04-22'),
      returnDate: null
    },
    {
      memberId: 2,
      bookId: 4,
      borrowDate: new Date('2025-03-18'),
      dueDate: new Date('2025-04-18'),
      returnDate: new Date('2025-03-25')
    },
    {
      memberId: 3,
      bookId: 5,
      borrowDate: new Date('2025-03-19'),
      dueDate: new Date('2025-04-19'),
      returnDate: null
    },
    {
      memberId: 3,
      bookId: 6,
      borrowDate: new Date('2025-03-23'),
      dueDate: new Date('2025-03-30'),
      returnDate: null
    },
    {
      memberId: 4,
      bookId: 1,
      borrowDate: new Date('2025-03-24'),
      dueDate: new Date('2025-04-24'),
      returnDate: null
    },
    {
      memberId: 5,
      bookId: 2,
      borrowDate: new Date('2025-03-25'),
      dueDate: new Date('2025-04-25'),
      returnDate: null
    }
  ];

  for (const record of records) {
    await prisma.borrowRecord.create({
      data: record
    });
  }
  console.log('Borrow records created');
}

async function main() {
  // Clear existing data
  await prisma.borrowRecord.deleteMany();
  await prisma.book.deleteMany();
  await prisma.member.deleteMany();
  await prisma.author.deleteMany();

  // Seed new data
  await createAuthors();
  await createBooks();
  await createMembers();
  await createBorrowRecords();

  console.log('Database seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
