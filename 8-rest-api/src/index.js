const express = require('express');
const {db} = require('./db');
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}))


server.get('/api/cars', (request, response) => {
// hämtar all data
    db.query('SELECT * FROM cars', (err, rows)=> {
        if(err)throw err.message
        response.status(200).json(rows)
    })
})
server.post('/api/cars', (request, response) => {
    // sparar till db
    db.query('INSERT INTO cars(brand, model, year) VALUES (?,?,?)', 
    [`${request.body.brand}`, `${request.body.model}`, `${request.body.year}`],
    (err, rows)=> {
        if(err)throw err.message
        response.status(200).json(rows)
    })
})
server.put('/api/cars/:id', (request, response) => {
    // uppdaterar db
    db.query('UPDATE cars SET brand = ?, model = ? WHERE id = ?', 
    [`${request.body.brand}`, `${request.body.model}`, `${request.params.id}`],
    (err, rows)=> {
        if(err)throw err.message
        response.status(200).json(rows)
    })
})
server.delete('/api/cars/:id', (request, response) => {
    // tar bort info 
    db.query('DELETE FROM cars WHERE id = ?', 
    [`${request.params.id}`],
    (err, rows)=> {
        if(err)throw err.message
        response.status(200).json(rows)
    })
})

server.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
});