const User = require('../models/User');

module.exports = {
  index: (req, res) => {
    res.render('home', {
      pageTitle: 'User Homepage'
    });
  },
  create: (req, res) => {
    console.log(req.body);

    const user = new User({
      email: req.body.email,
      password: req.body.password
    });

    user.save()
      .then((addedUser) => {
        console.log(addedUser);
        res.redirect('/');
      });
  },
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((user) => {
        if (user) {
          res.render('show', { user, success: true });
        }
        else {
          res.render('show', { success: false, user: 'not exist' });
        }
      }).catch(() => {
        res.render('show', { success: false, user: 'not exist' });
      });
  },
  delete: (req, res) => {
    res.send('User Homepage');
  }
};
