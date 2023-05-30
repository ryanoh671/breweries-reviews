var express = require('express');
var router = express.Router();
var breweriesCtrl = require('../controllers/breweries');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /movies
router.get('/', breweriesCtrl.index);

// GET /movies/new
router.get('/new', breweriesCtrl.new);


module.exports = router;