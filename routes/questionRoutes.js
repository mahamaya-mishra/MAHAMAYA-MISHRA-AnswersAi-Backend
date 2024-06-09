// routes/questionRoutes.js
const express = require('express');
const { createQuestion, getQuestion } = require('../controllers/questionController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, createQuestion);
router.get('/:questionId', protect, getQuestion);

module.exports = router;
