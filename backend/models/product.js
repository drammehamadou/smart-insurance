const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    coverage: {
        type: String,
        required: true,
    },
    productType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }],
    price : {
        type: Number,
        default:0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    isAvailable: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    startDate: {
        type: Date
    },
    expireDate: {
        type: Date
    },
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});


exports.Product = mongoose.model('Product', productSchema);
