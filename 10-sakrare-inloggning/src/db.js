const mysql = require('mysql2')

// konfiguera databas
exports.db = mysql.createPool({
    host: 'localhost',
    database: 'users',
    port: 3307, // för MariaDB
    user: 'root'
})