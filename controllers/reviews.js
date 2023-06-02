const Brewery = require('../models/brewery');

module.exports = {
    create,
    edit, 
    update
};

async function create(req, res) {
    const brewery = await Brewery.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    brewery.reviews.push(req.body);
    try {
        await brewery.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/breweries/${brewery._id}`);
}

async function edit(req, res) {
    const brewery = await Brewery.findOne({'reviews._id': req.params.id});
    const review = brewery.reviews.id(req.params.id);
    res.render(`reviews/edit`, { review, title: 'Edit Review'});
}

async function update(req, res) {
    const brewery = await Brewery.findOne({'reviews._id': req.params.id});
    const reviewSubdoc = brewery.reviews.id(req.params.id);
    if (!reviewSubdoc.user.equals(req.user._id)) return res.redirect(`/breweries/${brewery._id}`);
    reviewSubdoc.content = req.body.content;
    reviewSubdoc.rating = req.body.rating;
    try {
        await brewery.save();
    } catch (e) {
        console.log(e.message);
    }
    res.redirect(`/breweries/${brewery._id}`);
}