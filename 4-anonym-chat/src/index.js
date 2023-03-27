const express = require('express');
const path = require('path');
const { v4 } = require('uuid');
const app = express();
const fs = require('fs');
//fs.writeFileSync()

const messages = require('./data/messages.json').map(item => {
    return {id: item.id, 
            message: item.message,
            time: new Date().getTime()
        }
})

app.use(express.static(path.join('public')));
app.use(express.json({extended: true}))

app.get('/api/messages', (request, response) => {
    response.status(200).json(messages);
    
});

app.post('/api/messages', (request, response) => {
   messages.push({
    id: v4(),
    message: request.body.message,
    time: new Date().getTime()
   })
    console.log(request.body);
    response.status(200).json(messages)
    
});
app.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
});