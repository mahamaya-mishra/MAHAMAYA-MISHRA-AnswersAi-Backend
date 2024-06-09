// controllers/questionController.js
const { v4: uuidv4 } = require('uuid');
const Question = require('../models/Question');
const axios = require('axios');

exports.createQuestion = async (req, res) => {
  const { content } = req.body;
  const newQuestion = await Question.create({ id: uuidv4(), user_id: req.user.id, content });
    console.log("Auth success")
    console.log(process.env.ANTHROPIC_API_KEY)
    const formattedPrompt = `\n\nHuman: ${content}\n\nAssistant:`;
  try {
    const response = await axios.post('https://api.anthropic.com/v1/complete', {
      prompt: formattedPrompt,
      max_tokens_to_sample: 100,
      model: "claude-v1"
    }, {
      headers: { 'x-api-key':`${process.env.ANTHROPIC_API_KEY}`,'anthropic-version': '2023-06-01','Content-Type': 'application/json'}
    });
    console.log(response)
    const answer= response.data.completion.trim();
    newQuestion.content += `\nANSWER: ${answer}`;
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error generating answer:', error.response?.data || error.message);
    res.status(500).json({ message: 'Error generating answer' });
  }
};

exports.getQuestion = async (req, res) => {
    try {
        const questionId = req.params.questionId;
    
        // Fetch the question by ID
        const question = await Question.findByPk(questionId);
    
        if (!question) {
          return res.status(404).json({ message: 'Question not found' });
        }
    
        // Split question content into question and answer
        const [questionContent, answerContent] = question.content.split('\nANSWER:');
    
        // Remove leading/trailing whitespaces
        const questionText = questionContent.trim();
        const answerText = answerContent ? answerContent.trim() : null;
    
        // Construct the response object
        const formattedQuestion = {
          id: question.id,
          question: questionText,
          answer: answerText,
        };
    
        res.json(formattedQuestion);
      } catch (error) {
        console.error('Error fetching question:', error);
        res.status(500).json({ message: 'Error fetching question' });
      }
};
