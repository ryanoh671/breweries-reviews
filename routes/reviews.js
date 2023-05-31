var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /breweries/:id/reviews 
router.post('/breweries/:id/reviews', reviewsCtrl.create);

// GET /reviews/:id/edit
router.get('/reviews/:id/edit', reviewsCtrl.edit);

// GET /breweries/:id/reviews/:id

module.exports = router;
