var express = require('express');
var router = express.Router();
var breweriesCtrl = require('../controllers/breweries');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /breweries
router.get('/', breweriesCtrl.index);

// GET /breweries/new
router.get('/new', ensureLoggedIn, breweriesCtrl.new);

// POST /breweries
router.post('/', ensureLoggedIn, breweriesCtrl.create);

// GET /breweries/:id 
router.get('/:id', ensureLoggedIn, breweriesCtrl.show);

// DELETE /breweries/:id
router.delete('/:id', ensureLoggedIn, breweriesCtrl.delete);

module.exports = router;