const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env file

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DATABASE_PASSWORD, // Use the DATABASE_PASSWORD from .env
    database: 'bug_tracker'
});

// Rest of the code...

