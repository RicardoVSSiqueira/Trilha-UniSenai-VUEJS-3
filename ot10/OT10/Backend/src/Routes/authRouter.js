const express = require('express');

const authRouter = express.Router();

const AuthController = require('../Controller/authController');
const auth = require('../Middlewares/auth');

authRouter.post('/register', AuthController.register);

authRouter.post('/login', AuthController.login);

authRouter.post('/logout', auth, AuthController.logout);

module.exports = authRouter;