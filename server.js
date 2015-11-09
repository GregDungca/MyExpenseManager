var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db.js');
var ExpenseModel = require('./model/expense.js');


var app = express();

app.use(bodyParser.json());

app.get('/', function (req,res) {
  res.send('hello world!');
});

app.post('/expenses', function (req,res) {
  // read the body of the request (expense)
  // invoke the expense insertion handler from the expense model
    // pass in the body
    // pass in a callback which will handle success & failure
      // on success, respond with success, 201?
      // on failure, response with 404
        // console.log(error)

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


});

app.post('/users', function (req,res) {

});

app.get('/budget', function (req,res) {

})

app.listen(3000);

