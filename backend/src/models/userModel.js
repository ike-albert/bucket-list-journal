const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: String,
        email: String,
        password: String,
        bio:String,
        isVerified:Boolean,

    });

module.exports =  mongoose.model('users', User);