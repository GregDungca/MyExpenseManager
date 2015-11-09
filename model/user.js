var db = require('../db.js');
var mongoose = require('mongoose');


db.userSchema.methods.insertUser = function ( cb ) {
  this.save( function (err) {
    cb(err);
  });
}

var UserModel = mongoose.model('user', db.userSchema);

module.exports = UserModel;

