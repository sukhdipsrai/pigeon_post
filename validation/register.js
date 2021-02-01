const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    // debugger
    data.firstname = validText(data.firstname) ? data.firstname : '';
    data.lastname = validText(data.lastname) ? data.lastname : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';
    data.phone = validText(data.phone) ? data.phone : '';
    data.usertype = validText(data.usertype) ? data.usertype: '';

    if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
        errors.firstname = 'Firstname must be between 2 and 30 characters';
    }

    if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
        errors.lastname = 'Lastname must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.firstname)) {
        errors.firstname = 'Firstname field is required';
    }

    if (Validator.isEmpty(data.lastname)) {
        errors.lastname = 'Lastname field is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    if (!Validator.isLength(data.phone, { min: 10, max: 10 })) {
        errors.phone = 'Phone length must be 10';
    }

    if (Validator.isEmpty(data.phone)) {
        errors.phone = 'Phone field is required';
    }

    if (Validator.isEmpty(data.usertype)) {
        errors.usertype = 'Usertype have to be choosen';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};