const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join('public')));

app.get('/hello', (request, response) => {
  response.send('Hej på dig');
})

app.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
})