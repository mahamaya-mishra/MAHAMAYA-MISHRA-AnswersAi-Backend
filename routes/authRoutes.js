// routes/authRoutes.js
const express = require('express');
const { login, logout, refresh } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refresh);

module.exports = router;
