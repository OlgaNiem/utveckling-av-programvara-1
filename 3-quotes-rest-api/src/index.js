const express = require('express');
const path = require('path');
const app = express();

const quotes = require('./data/quotes.json');

app.use(express.static(path.join('public')));

app.get('/api/quote', (request, response) => {
    const  randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    response.status(200).json(randomQuote);
});


app.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
});