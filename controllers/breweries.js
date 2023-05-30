const Brewery = require('../models/brewery');

module.exports = {
    index, 
    new: newBrewery,
    create, 
    show
};

async function index(req, res) {
    const breweries = await Brewery.find({})
    res.render('breweries/index', { breweries, title: 'All Breweries' });
  }

function newBrewery(req, res) {
    // render an error msg if create action fails
    res.render('breweries/new', { title: 'Add Brewery', errorMsg: '' } );
}

async function create(req, res) {
    req.body.user = req.user._id;
    try {
        const brewery = await Brewery.create(req.body);
        
        res.redirect(`/breweries/${brewery._id}`);
    } catch (err) {
        console.log(err);
        res.render('breweries/new', { errorMsg: err.message });
    }
}
async function show(req, res) {
    // find the brewery to show details of (req.params.id)
    const brewery = await Brewery.findById(req.params.id);
    res.render('breweries/show', { title: 'Brewery Detail', brewery });
}

