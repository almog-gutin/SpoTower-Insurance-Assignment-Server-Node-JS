const mongoose = require('mongoose');
const validator = require('validator');

const stringUtils = require('../utils/string.utils');

const quoteSchema = new mongoose.Schema(
    {
        marketingTitle: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'Company name is required.'],
        },
        imageURL: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, 'Image URL is required.'],
            validate(value) {
                if (!validator.isURL(value)) throw new Error('Invalid URL.');
            },
        },
        advantages: {
            type: [String],
            default: [],
        },
        zipCodes: [
            {
                type: String,
                min: 5,
                validate(value) {
                    if (!validator.isPostalCode(value, 'any')) throw new Error('Invalid postal code.');
                },
            },
        ],
        ageLimit: {
            type: Number,
            default: 0,
            min: 0,
            max: 120,
        },
    },
    {
        timestamps: true,
    }
);

// Method to parse the quote data and sending it to the client with the data that we want.
quoteSchema.methods.toJSON = function () {
    const quote = this;

    const quoteObj = quote.toObject();
    quoteObj.marketingTitle = stringUtils.formatString(quote.marketingTitle);

    return quoteObj;
};

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
