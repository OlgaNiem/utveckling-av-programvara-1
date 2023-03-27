const express = require('express');
const path = require('path');
const app = express();

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'pokemon'
  });

app.use(express.static(path.join('public')));

app.get('/api/pokemon', async(request, response) => {
    db.query(
        'SELECT * FROM pokemon LIMIT 20' ,
            function(err, rows) {
            response.json(rows);
        }
    );
});

app.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
});