const mysql2 = require('mysql2')

// konfiguera databas
exports.db = mysql2.createPool({
    host: 'localhost',
    database: 'api',
    port: 3307, // för MariaDB
    user: 'root'
})