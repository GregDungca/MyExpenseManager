var express = require('express');
var app = express();

// connect 

app.get('/', function(req,res) {
  res.send('hello world!');
});

app.post('/expenses', function(req,res) {
  
});

app.listen(3000);

