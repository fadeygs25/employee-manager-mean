const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: [true, 'Please add a product Name'],
        maxlength: 32
    },

    size: {
        type: Number,
        trim: true,
        required: [true, 'Product must have a price'],
        maxlength: 32
    },



}, { timestamps: true });






module.exports = mongoose.model("Product", productSchema);