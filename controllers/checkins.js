const Brewery = require('../models/brewery');

module.exports = {
  new: newCheckins,
  create
};


async function newCheckins(req, res) {
    const brewery = await Brewery.findById(req.params.id);
    res.render('checkins/new', { brewery, title: 'Confirm Check-In', errorMsg: '' } );
}

async function create(req, res) {
    const brewery = await Brewery.findById(req.params.id);
    console.log(brewery);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    brewery.checkins.push(req.body);
    try {
        await brewery.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/breweries/${brewery._id}`);
}
