var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
  amount: Number,
  date: { type: Date},
  amount: Number,
  category: String,
  note: String,
  userID: Number // consider changing to username to reduce complexity?
});

var Expense = mongoose.model('expense', expensesSchema);

