const mongoose = require("mongoose"),
    userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String,
        gender: String,
        location: String,
        email: String, 
        password: String,
        securityQ: String,
        securityA: String
    });

module.exports = mongoose.model("User", userSchema);