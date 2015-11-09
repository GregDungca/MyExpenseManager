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
  userID: Number // consider changing to username to reduce complexity?
});





module.exports = { 
  expenseSchema : expenseSchema
}
