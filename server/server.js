var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db.js');
var ExpenseModel = require('./model/expense.js');
var UserModel = require('./model/user.js');
var logger = require('./middleware/logger.js');



var app = express();
app.use(bodyParser.json());
app.use(logger);
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('../client'));


// app.get('/', function (req,res) {
//   res.send();
// });

app.post('/api/expenses', function (req,res) {

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

app.get('/api/expenses', function (req,res) {

  
  ExpenseModel.find(req.query,{_id: 0, __v: 0}, function(err, data) {
    console.log('Getting expenses...');
    if ( err ) {
      console.error(err);
      res.status(404).send(); 
    } else {
      res.send(data);
    }
  });
  // might want to refactor to include this funciton within expense.js
  
});

app.post('/api/users', function (req,res) {
  var user = new UserModel(req.body);
  user.insertUser( function(err) {
    if ( err ) {
      console.error(err);
      res.status(404).send(); 
    } else {
      res.status(201).send();
    }
  });

});

app.get('/budget', function (req,res) {

})

app.listen(3000);

