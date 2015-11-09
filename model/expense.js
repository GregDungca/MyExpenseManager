var db = require('../db.js');
var mongoose = require('mongoose');


db.expenseSchema.methods.insertExpense = function ( cb ) {
  console.log('Entered here');
  this.save( function(err) {
    cb(err);
  });
}

var ExpenseModel = mongoose.model('expense', db.expenseSchema);

module.exports = ExpenseModel;

