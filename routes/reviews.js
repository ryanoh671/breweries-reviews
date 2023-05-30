var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /reviews/:id/reviews 
router.post('/breweries/:id/reviews', reviewsCtrl.create);

module.exports = router;
