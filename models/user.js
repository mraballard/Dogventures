var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var ReviewSchema = require('./review');
var LocationSchema = require('./location');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  locations: [LocationSchema],
  reviews: [ReviewSchema],
  dog: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
