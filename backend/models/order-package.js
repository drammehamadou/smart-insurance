const mongoose = require('mongoose');

const orderPackageSchema = mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

exports.OrderPackage = mongoose.model('OrderPackage', orderPackageSchema);

