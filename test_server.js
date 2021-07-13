var express = require('express');
var path = require('path');
var app = express();

// 여기서 app은 express의 인스턴스
app.get('/', function(req, res) {
    res.send('GET request to the root');
  });
  
  app.post('/', function(req, res) {
    res.send('POST request to the root');
  });
  
  app.get('/path', function(req, res) {
    console.log('GET request to the /path');
    next();	// 둘 이상의 핸들러 함수를 사용하기 위함.
  }, function(req, res) {
    res.send('This is /path page!');
  });