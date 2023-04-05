const express = require('express');
const {db} = require('./db');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const MySQLStore = require('express-mysql-session')(session);
const server = express();

server.use(session({
    secret: 'äöpoköjilugkyftjr-dhxdcvbnm,oi',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: true, httpOnly: true, sameSite: true, maxAge: 1000 * 60 * 60}, // httpOnly -  bara server ändar cookie, //sameSite - accepterar bara localhost:3000, inget annat // maxAge: 1000 * 60 * 60 i millisecunder
    store: new MySQLStore({
        host: 'localhost',
        database: 'users',
        port: 3307, // för MariaDB
        user: 'root'
    })
}))

server.use(express.static(path.join('public')));

server.use(cookieParser()); // skapar cookies
server.use(express.urlencoded()); // lagar formulär
server.use(express.json());

//routs
server.get('/', (request, response) => {
    response.sendFile(path.resolve('public/index.html'))
})

server.get('/login', (request, response) => {
    
    request.sessionStore.get(request.cookies.session_id, (err, data) => {
        if(err)throw err
        if(data == null){
           return response.sendFile(path.resolve('public/login.html'))
        }
        response.sendFile(path.resolve('public/dashboard.html'))
    })
})

server.get('/dashboard', (request, response) => {
    request.sessionStore.get(request.cookies.session_id, (err, data) => {
        if(err)throw err
        if(data == null){
           return response.redirect('back')
        }
        response.sendFile(path.resolve('public/dashboard.html'))
    })
    
})

server.post('/api/login', (request, response)=>{
    db.query('SELECT * FROM `users` WHERE `username` = ? AND `password` = ?',
    [`${request.body.email}`, `${request.body.password}`], 
    (err, rows) => {
        if(err)throw err.message
        if(rows.length > 0){
            request.session.username = {user: request.body.email, loggedIn: true}
            response.cookie('session_id', request.sessionID, {httpOnly: true, secure: true, sameSite: true});
            response.redirect('/dashboard')
            }else{
            //response.status(200).json({error: 'Invalid username and/or password'});
            response.redirect('back')
        }
    });
})
    
server.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
});