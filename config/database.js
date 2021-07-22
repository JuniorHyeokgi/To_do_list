var mysql = require('mysql');
var db_info = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'cheerup1004',
    database: 'db_test'
}

module.exports = {
    init: function() {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.log('mysql connection err : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}