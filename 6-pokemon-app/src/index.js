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
        'SELECT * FROM pokemon LIMIT 40 WHERE `name` = ? LIKE '%a'',
            function(err, rows) {
            response.json(rows);
        }
    );
});
/*
app.get('/api/pokemon/:id', async(request, response)=>{
    console.log(request.params)
    db.query(
        'SELECT * FROM pokemon WHERE `id` = ?',
        [request.params.id],
        function(err, name) {
            response.json(name);
        }
    )
})
*/
app.get('/api/pokemon/:select', async(request, response) => {
    console.log(request.params)
    db.query(
        'SELECT * FROM pokemon WHERE `height` = ? AND `weight` = ? AND `base_experience` = ?',
        [`${request.params.height}`, `${request.params.weight}`, `${request.params.base_experience}`],
            (err, rows) => {
                if(err)throw err.message
                response.status(200).json(rows)
        });
})


app.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
});