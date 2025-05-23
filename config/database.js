require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
});

connection.connect(err => {
  if (err) {
    console.error('Connection failed:', err);
    process.exit(1);
  }
  console.log('Connected successfully!');
  connection.end();
});
