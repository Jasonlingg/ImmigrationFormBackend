const pgp = require('pg-promise')();

// Replace these values with your database credentials
const db = pgp({
  host: 'localhost',
  port: 5432, // Make sure this is the correct port for your PostgreSQL instance
  database: 'immigrantinfo',
  user: 'form_admin',
  password: '',
});

module.exports = db;
