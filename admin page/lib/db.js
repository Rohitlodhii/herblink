const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.DATABASE_URL;

// Lazy/no-op DB helper for environments where external APIs are used
if (!connectionString) {
  console.warn('NOTICE: DATABASE_URL not set. Local DB access is disabled; use external APIs instead.');
  module.exports = {
    query: () => { throw new Error('Local database disabled. Set DATABASE_URL or use external APIs.'); },
  };
} else {
  const { Pool } = require('pg');
  const pool = new Pool({ connectionString });
  module.exports = {
    query: (text, params) => pool.query(text, params),
  };
}
