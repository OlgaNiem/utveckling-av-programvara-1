const express = require('express')
const http = require('http')
const app = express()
const path = require('path')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)

app.use(express.static(path.resolve('public')))

io.on('connection', (socket)=>{
    console.log('user connected with id: ' + socket.id)
    socket.on('msg', (msg)=>{
        io.emit('msg', msg)
    })
})



server.listen(3000, ()=> {
    console.log('web up')
})