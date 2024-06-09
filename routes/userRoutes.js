// routes/userRoutes.js
const express = require('express');
const { createUser, getUser, getUserQuestions } = require('../controllers/userController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', createUser);
router.get('/:userId', protect, getUser);
router.get('/:userId/questions', protect, getUserQuestions);

module.exports = router;
