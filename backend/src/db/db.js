const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',     
  user: 'root',   
  password: 'password',
  database: 'volunteer_network' 
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID ' + connection.threadId);
});

module.exports = connection;