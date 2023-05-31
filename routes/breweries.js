var express = require('express');
var router = express.Router();
var breweriesCtrl = require('../controllers/breweries');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /breweries
router.get('/', breweriesCtrl.index);

// GET /breweries/new
router.get('/new', breweriesCtrl.new);

// POST /breweries
router.post('/', breweriesCtrl.create);

// GET /breweries/:id 
router.get('/:id', breweriesCtrl.show);

// DELETE /breweries/:id
router.delete('/:id', breweriesCtrl.delete);

module.exports = router;