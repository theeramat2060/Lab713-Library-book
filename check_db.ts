import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: 'admin123',
  database: 'book'
});

client.connect().then(() => {
  console.log('✓ Connected to database');
  return client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';");
}).then(result => {
  console.log('\n📊 Tables in database:');
  result.rows.forEach(row => console.log(`  - ${row.table_name}`));
  return client.query("SELECT * FROM book;");
}).then(result => {
  console.log('\n📚 Books in database:');
  console.log(JSON.stringify(result.rows, null, 2));
}).catch(err => {
  console.error('✗ Error:', err.message);
}).finally(() => {
  client.end();
});
