const express = require('express');
const path = require('path');
const app = express();

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'gamesdb'
  });

app.use(express.static(path.join('public')));

app.get('/api/games', async(request, response) => {
    db.query(
        'SELECT * FROM game' ,
            function(err, rows) {
            response.json(rows);          
        }
    );
});

app.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
});