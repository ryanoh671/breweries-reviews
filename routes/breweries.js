var express = require('express');
var router = express.Router();
var breweriesCtrl = require('../controllers/breweries');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', breweriesCtrl.index);

module.exports = router;