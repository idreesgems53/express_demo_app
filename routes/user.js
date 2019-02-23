const express = require('express');

const router = express.Router();

// load user controller
const UserController = require('../controllers/user_controller');

router.get('/', UserController.index);

router.get('/:userid', (req, res) => {
  res.send('User Page' + req.params.userid);
});

router.get('/auth', (req, res) => {
  res.send('Auth Page');
});

module.exports = router;
