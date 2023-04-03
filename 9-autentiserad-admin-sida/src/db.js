const mysql = require('mysql2')

exports.db = mysql.createPool({
    host: 'localhost',
    database: 'app_users',
    user: 'root'
})