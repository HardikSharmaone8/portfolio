var mongoose = require("mongoose");
var validator = require("validator");

var obj = new mongoose.Schema({
    Name: {
        type: String,
        minlength: 3,
        uppercase: true,
    },
    Email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        },
        lowercase: true,
    },
    Message: {
        type: String,
        uppercase: true,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
});

var Contact = new mongoose.model("contactdata", obj);

module.exports = Contact;