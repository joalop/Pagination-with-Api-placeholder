const mysql = require('mysql2')

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'news_portal'
})