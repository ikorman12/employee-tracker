const mysql = require('mysql2');
require('dotenv').config()

const db = mysql.createConnection(
    {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'employees_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

module.exports = db;



