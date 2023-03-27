const express = require('express');
const path = require('path');
const app = express();

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3307, // port for MatiaDB connection
    user: 'root',
    database: 'temperature'
  });

app.use(express.static(path.join('public')));

app.get('/api/temperature', async(request, response) => {
    db.query(
        'SELECT * FROM `temperature`',
            function(err, rows) {
            response.json(rows);
        }
    );
});

app.get('/api/temperature/:year', async(request, response) => {
    console.log(request.params)
    db.query(
        'SELECT * FROM `temperature` WHERE `year` = ?',
        [request.params.year], // params ex /:2021 (year)
            function(err, year) {
            response.json(year);
        }
    );
});

app.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
});