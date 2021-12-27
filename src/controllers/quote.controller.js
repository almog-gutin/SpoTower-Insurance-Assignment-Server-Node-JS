const Quote = require('../models/quote.model');

const findQuotes = async (req, res) => {
    const zipCode = req.body.zipCode;

    try {
        const quotes = await Quote.find({ zipCodes: { $in: [zipCode] } });

        res.send({ status: 200, data: { quotes } });
    } catch (err) {
        res.status(500).send({ status: 500, message: 'Internal server error.' });
    }
};

const createQuote = async (req, res) => {
    const quote = new Quote(req.body);

    try {
        await quote.save();

        console.log('Quote: New quote was added.');

        res.status(201).send({ status: 201, data: { quote } });
    } catch (err) {
        res.status(400).send({ status: 400, message: err.message });
    }
};

module.exports = {
    findQuotes,
    createQuote,
};
