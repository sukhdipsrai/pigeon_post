const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserProfileImagePath = 'uploads/userImage'
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    usertype:{
        type: String,
        required: true
    },
    userImage:{
        type: String,
        required: true
    } 
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);
module.exports.UserProfileImagePath = UserProfileImagePath;