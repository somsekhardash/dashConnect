const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    workemail: {
        type: String,
        required: true
    },
    aboutme: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model("user", UserSchema); 