const express = require('express');
const {db} = require('./db');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const server = express();

server.use(session({
    secret: 'äöpoköjisgdxfhcgkjömlikjö7dcvbnm,oi',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: true, httpOnly: true, sameSite: true, maxAge: 1000 * 60 * 60}, // httpOnly -  bara server ändar cookie, //sameSite - accepterar bara localhost:3000, inget annat // maxAge: 1000 * 60 * 60 i millisecunder
    store: new MySQLStore({
        host: 'localhost',
        database: 'app_users',
        user: 'root'
    })
}))

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json())

server.use(express.static(path.join('public')));

server.use(cookieParser());
server.use(express.urlencoded()); // lagar formulär
server.use(express.json());

server.get('/', async(request, response) => {
    // servera index.html
    response.sendFile(path.resolve('public/index.html'))

    /*db.query('SELECT * FROM `app_users` WHERE `username` = ? AND `password` = ?',
    [`${request.body.username}`, `${request.body.password}`], 
    (err, rows) => {
        if(err)throw err.message
        response.status(200).json(rows)
    });*/
})

server.get('/admin', (request, response) => {
    // servera admin.html
    request.sessionStore.get(request.cookies.session_id, (err, data) => {
        if(err)throw err
        if(data == null){
           return response.redirect('back')
        }
        response.sendFile(path.resolve('public/admin.html'))
    })
})

server.post('/api/login', (request, response) => {
    //hanterar inlogging
    db.query('SELECT * FROM `app_users` WHERE `username` = ? AND `password` = ?',
    [`${request.body.username}`, `${request.body.password}`], 
    (err, rows) => {
        if(err)throw err.message
        if(rows.length > 0){
            request.session.username = {user: request.body.username, loggedIn: true}
            response.cookie('session_id', request.sessionID, {httpOnly: true, secure: true, sameSite: true});
            response.redirect('/admin')
            }else{
            response.status(200).json({error: 'Invalid username and/or password'});
            //response.redirect('back')
        }
    });
})


server.get('/api/logout', (request, response, next) => {
    // tar bort sessionen
    response.cookie('session_id', '')   
    return response.redirect('/')
})

server.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
});