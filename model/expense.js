var db = require('../db.js');
var mongoose = require('mongoose');


db.expenseSchema.methods.insertExpense = function ( cb ) {
  this.save( function (err) {
    cb(err);
  });
}


db.expenseSchema.methods.getExpenses = function ( cb ) {
  console.log('Getting expenses...');
  this.find( {}, function (err, docs) {
    cb(err, docs);
  });
}


var ExpenseModel = mongoose.model('expense', db.expenseSchema);

module.exports = ExpenseModel;

