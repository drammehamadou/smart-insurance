const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    membership: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address1: {
        type: String,
        default: ''
    },
    address2: {
        type: String,
        default: ''
    },
    postcode :{
        type: String,
        default: ''
    },
    county: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }

});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;
