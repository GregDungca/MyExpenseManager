var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/expenseManager');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
  amount: Number,
  date: { type: Date},
  category: String,
  note: String,
  userID: Number // consider changing to username to reduce complexity?
});



module.exports = { 
  expenseSchema : expenseSchema
}
