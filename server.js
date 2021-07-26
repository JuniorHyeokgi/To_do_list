var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();

db_config.connect(conn);

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', function(req, res) {
    var sql = 'SELECT * FROM list';
    conn.query(sql, function(err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('main.ejs', {list : rows});
    });
});

app.post('/list', function(req, res) {
    var body = req.body;
    console.log(body);

    var sql = 'INSERT INTO list VALUES(?, NOW())';
    var params = [body.content];
    console.log(sql);
    conn.query(sql, params, function(err) {
        if(err) console.log('query is not excuted. inster fail...\n' + err);
        else res.redirect('/');
    });
});

app.post('/delete', function(req, res) {
    var body = req.body;
    console.log(body);

    var sql = 'DELETE FROM list WHERE content = ?';
    var params = [body.content];
    console.log(sql);
    conn.query(sql, params, function(err) {
        if(err) console.log('query is not excuted. delete fail...\n' + err);
        else res.redirect('/');
    });
});

app.listen(3000, () => console.log('Server listens on prt 3000...'));