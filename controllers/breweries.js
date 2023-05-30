// const Brewery = require('../models/brewery');

module.exports = {
    index, 
    new: newBrewery
};

function index(req, res) {
    res.render('breweries/index', { title: 'All Breweries' });
  }

function newBrewery(req, res) {
    // render an error msg if create action fails
    res.render('breweries/new', { title: 'Add Brewery', errorMsg: '' });
}