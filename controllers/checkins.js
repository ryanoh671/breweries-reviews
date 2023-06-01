const Brewery = require('../models/brewery');

module.exports = {
  new: newCheckins, 
  create
};


function newCheckins(req, res) {
    // render an error msg if create action fails
    res.render('checkins/new', { title: 'Confirm Check-In', errorMsg: '' } );
}

async function create(req, res) {
    const brewery = await Brewery.findById(req.params.id);
    
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
