const {
  Schema: { ObjectId },
} = require('mongoose')

module.exports = {
  institute: {
    type: ObjectId,
    ref: 'Institute',
    required: true,
  },
  createdBy: {
    type: ObjectId,
    ref: 'Member',
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  color: {
    type: String,
    enum: ['app', 'dark', 'primary', 'success', 'info', 'danger', 'warning'],
  },
  hostLink: {
    type: String,
  },
  learningMode: {
    type: String,
    enum: ['Online', 'Offline'],
  },
  limit: {
    type: Number,
  },
  price: {
    type: Number,
  },
  type: {
    type: String,
    enum: ['Common', 'Specific', 'other'],
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
}
