module.exports = {
  index: (req, res) => {
    res.render('home', {
      pageTitle: 'User Homepage'
    });
  },
  create: (req, res) => {
    console.log(req.body);
    res.redirect('/');
  },
  delete: (req, res) => {
    res.send('User Homepage');
  }
};
