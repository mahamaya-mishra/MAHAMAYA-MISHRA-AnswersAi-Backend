// controllers/userController.js
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');
const Question = require('../models/Question');

exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ id: uuidv4(), email, password: hashedPassword });
  res.status(201).json(newUser);
};

exports.getUser = async (req, res) => {
  const user = await User.findByPk(req.params.userId, {
    attributes: { exclude: ['password'] },
  });
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.getUserQuestions = async (req, res) => {
    try {
        const userId = req.params.userId;
    
        // Fetch questions for the specified user
        const questions = await Question.findAll({ where: { user_id: userId } });
    
        // Map questions to desired format
        const formattedQuestions = questions.map(question => {
          // Split question content into question and answer
          const [questionContent, answerContent] = question.content.split('\nANSWER:');

          console.log(question.content.split('\nANSWER:'))
    
          // Remove leading/trailing whitespaces
          const questionText = questionContent.trim();
          const answerText = answerContent ? answerContent.trim() : null
    
          return {
            id: question.id,
            question: questionText,
            answerText : answerText
          };
        });
    
        res.json(formattedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ message: 'Error fetching questions' });
      }
};
