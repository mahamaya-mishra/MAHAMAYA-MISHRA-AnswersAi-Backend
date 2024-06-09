// app.js
const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./models/index');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
