const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth')
const { token } = require('morgan');

const UsersController = require('../controllers/user')



router.get('/all', UsersController.users_get_all)

router.post('/signup', UsersController.user_signup);

router.post('/login', UsersController.user_login);

router.delete('/:userId',checkAuth, UsersController.user_delete);


module.exports = router;