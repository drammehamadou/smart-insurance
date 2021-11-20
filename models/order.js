const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderPackages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderPackage',
        required:true
    }],
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    county: {
        type: String,
        required: true,
    },
    postcode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    totalPrice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    }
})

orderSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

orderSchema.set('toJSON', {
    virtuals: true,
});

exports.Order = mongoose.model('Order', orderSchema);
