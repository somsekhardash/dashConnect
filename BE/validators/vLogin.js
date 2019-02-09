const validator = require("validator");
const isEmpty = require("./../validators/isEmpty.js");

module.exports = (validateLogin = (data) => {
    const errors = {};
    if (!validator.isEmail(data.email)) {
        errors["email"] = "wrong email entered"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
})