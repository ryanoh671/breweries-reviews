var express = require('express');
var router = express.Router();
var checkinsCtrl = require('../controllers/checkins');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /checkins/new
router.get('/checkins/new', ensureLoggedIn, checkinsCtrl.new);

// POST /checkins
router.post('/breweries/:id/checkins', ensureLoggedIn, checkinsCtrl.create);

module.exports = router;