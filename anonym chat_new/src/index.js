const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const PORT = 3000;


const messages = require('./data/messages.json').map(item => {
    return {id: item.id, 
            text: item.text,
            timestamp: new Date().getTime()
        }
})

app.use(express.static(path.join('public')));
app.use(express.json({extended: true}))

app.get('/api/messages', (req, res) => {
  res.status(200).json(messages);
});

app.post('/api/messages', (req, res) => {
  const message = {
    id: uuidv4(),
    text: req.body.text,
    timestamp: new Date().getTime()
   };

  messages.push(message);
  res.json(message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
