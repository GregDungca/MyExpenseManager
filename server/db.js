var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/expenseManager');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
  amount: Number,
  day: Number,
  month: Number,
  year: Number,
  category: String,
  note: String,
  username: String // consider using the id from the user table instead?
});

var userSchema = new Schema({
  username : String,
  password : String
});

var budgetSchema = new Schema({
  username : String,
  month : String,
  category : String
});

module.exports = { 
  expenseSchema : expenseSchema,
  userSchema : userSchema,
  budgetSchema : budgetSchema
}
