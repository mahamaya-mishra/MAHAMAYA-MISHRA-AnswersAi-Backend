// models/Question.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./User');

const Question = sequelize.define('Question', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  tableName: 'questions',
  timestamps: false,
});

Question.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Question;
