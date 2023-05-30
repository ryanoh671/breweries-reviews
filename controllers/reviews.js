const Brewery = require('../models/brewery');

module.exports = {
    create
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
