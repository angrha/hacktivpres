const express = require('express');
const router  = express.Router();
const User    = require('../controllers/userController')

router.get('/', User.findAll)
router.post('/signup', User.register)
router.post('/signin', User.login)

module.exports = router;
