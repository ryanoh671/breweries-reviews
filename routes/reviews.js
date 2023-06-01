var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /breweries/:id/reviews 
router.post('/breweries/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

// GET /reviews/:id/edit
router.get('/reviews/:id/edit', ensureLoggedIn, reviewsCtrl.edit);

// GET /reviews/:id
router.put('/reviews/:id', ensureLoggedIn, reviewsCtrl.update);

module.exports = router;
