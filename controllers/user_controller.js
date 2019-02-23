module.exports = {
  index: (req, res) => {
    res.render('home', {
      pageTitle: 'User Homepage'
    });
  },
  delete: (req, res) => {
    res.send('User Homepage');
  }
};
