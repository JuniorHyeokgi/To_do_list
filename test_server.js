var express = require('express');
var app = express();
var boardRouter = require('./router/board.js');

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.get('/', function(req, res) {
  var template =
  `<!DOCTYPE html>
  <html>
    <body>
      <form action='/login' method='post'>
        ID : <input type='text' name='id'><br>
        PWD : <input type='password' name='pwd'><br>
        <input type='submit' value='login'>
      </form>  
    </body>
  </html>`;
  res.writeHead(200, {'ContentType':'text/html'});
  res.write(template);
  res.end();
});

app.post('/login', function(req, res) {
  var body = req.body;
  console.log(body);

  res.send("ID : " + body.id + " / PWD : " + body.pwd);
})

app.use('/board', boardRouter);

app.listen(3000, () => console.log('Server listen on port 3000...'));