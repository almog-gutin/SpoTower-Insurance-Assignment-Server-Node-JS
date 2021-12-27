const express = require('express');

const quoteController = require('../controllers/quote.controller');

const router = new express.Router();

// Endpoint for finding quotes based on users search parameters
router.post('/find', quoteController.findQuotes);

// Endpoint for creating a new quote
router.post('/new', quoteController.createQuote);

module.exports = router;
