const express = require('express');
const router = express.Router();

const userController = require('@controllers/userController.js')

router
  .get('/v1/hello', userController.userHello)
  .post('/v1/auth/register', userController.registerUser)
  .post('/v1/auth/login', userController.loginUser)
  .post('/v1/auth/forgot',  userController.forgotUser)
  .post('/v1/auth/redefinePassword',  userController.redefinePassword)


module.exports = router;