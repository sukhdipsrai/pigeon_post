const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTaskInput(data) {
    let errors = {};

    data.pickup_loc = validText(data.pickup_loc) ? data.pickup_loc : '';
    data.dropoff_loc = validText(data.dropoff_loc) ? data.dropoff_loc : '';
    data.drop_off_number = validText(data.drop_off_number) ? data.drop_off_number : '';

    // data.status = validText(data.status) ? data.status : '';

    // data.date_posted = validText(data.date_posted) ? data.date_posted : '';
    // data.date_completed = validText(data.date_completed) ? data.date_completed : '';

    if (Validator.isEmpty(data.pickup_loc)) {
        errors.text = 'Pickup_loc field is required';
    }

    if (Validator.isEmpty(data.dropoff_loc)) {
        errors.text = 'Dropoff_loc field is required';
    }

    if (Validator.isEmpty(data.drop_off_number)) {
        errors.text = 'Reciver phone numbe is required';
    }

    // if (Validator.isEmpty(data.status)) {
    //     errors.text = 'Status has to be chosen';
    // }

    // if (Validator.isEmpty(data.date_posted)) {
    //     errors.text = 'Select the day you want to post';
    // }

    // if (Validator.isEmpty(data.date_completed)) {
    //     errors.text = 'Weight field is required';
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};