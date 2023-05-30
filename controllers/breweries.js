const Brewery = require('../models/brewery');

module.exports = {
    index, 
    new: newBrewery,
    create
};

function index(req, res) {
    res.render('breweries/index', { title: 'All Breweries' });
  }

function newBrewery(req, res) {
    // render an error msg if create action fails
    res.render('breweries/new', { title: 'Add Brewery', errorMsg: '' });
}

async function create(req, res) {
    try {
        const brewery = await Brewery.create(req.body);
        res.redirect(`/breweries/${brewery._id}`);
    } catch (err) {
        console.log(err);
        res.render('breweries/new', { errorMsg: err.message });
    }
}
// async function show(req, res) {
//     res.render('breweries/show', {title: 'Brewery Detail'});
// }