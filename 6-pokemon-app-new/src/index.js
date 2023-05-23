const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3307, // port for MatiaDB connection
    user: 'root',
    database: 'pokemon'
  });

app.use(express.static(path.join('public')));

app.get('/api/pokemon', async(request, response) => {
  const searchTerm = request.query.search;
  const sortBy = request.query.sortBy; // Sortering
  let query = 'SELECT * FROM pokemon';
  
  if (searchTerm) {
    query += ` WHERE name LIKE '%${searchTerm}%'`;
  }

  if (sortBy) {
    query += ` ORDER BY ${sortBy}`;
  }

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      response.json(results);
    }
  });
});



app.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
});