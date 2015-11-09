var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db.js');
var ExpenseModel = require('./model/expense.js');
var logger = require('./middleware/logger.js');



var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


app.use(logger);


app.get('/', function (req,res) {
  res.send('hello world!');
});

app.post('/expenses', function (req,res) {

  var expense = new ExpenseModel(req.body);
  expense.insertExpense( function(err) {
    if ( err ) {
      console.error(err);
      res.status(404).send(); 
    } else {
      res.status(201).send();
    }
  });


});

app.get('/expenses', function (req,res) {

  // var expense = new ExpenseModel({});
  // expense.getExpenses( function(err, data) {
  //   if ( err ) {
  //     console.error(err);
  //     res.status(404).send(); 
  //   } else {
  //     res.send(data);
  //   }
  // })
  ExpenseModel.find({},{_id : 0, __v: 0}, function(err, data) {
    if ( err ) {
      console.error(err);
      res.status(404).send(); 
    } else {
      res.send(data);
    }
  });
  
});

app.post('/users', function (req,res) {

});

app.get('/budget', function (req,res) {

})

app.listen(3000);

