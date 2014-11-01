var mongoose = require('mongoose');


var UserSchema = mongoose.Schema({
    username: String,
    password: String
});




exports.User = mongoose.model('user', UserSchema);

