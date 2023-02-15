const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join('public')));

app.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
})