module.exports = {
  datasources: {
    db: {
      url: 'postgres://admin:admin123@localhost:5432/library?schema=public',
    },
  },
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
};
