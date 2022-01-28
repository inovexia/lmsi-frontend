const { Schema } = require('mongoose')

module.exports = Schema({
  level: {
    required: 'Level is required',
    unique: true,
    type: Number
  },
  name: {
    required: 'Name is required',
    unique: true,
    type: String
  },
  status: {
    required: 'Status is required',
    type: String,
    enum: ['active', 'disabled', 'archived'],
    default: 'disabled'
  }
})
