// const Brewery = require('../models/brewery');

module.exports = {
    index
};

function index(req, res) {
    res.render('breweries/index', { title: 'All Breweries' });
  }