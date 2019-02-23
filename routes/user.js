const express = require('express');

const router = express.Router();

// load user controller
const UserController = require('../controllers/user_controller');

router.get('/', UserController.index);
router.post('/', UserController.create);

router.get('/:id', UserController.show);

router.get('/auth', (req, res) => {
  res.send('Auth Page');
});

module.exports = router;
