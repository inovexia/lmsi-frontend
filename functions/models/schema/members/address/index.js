const {
  Schema: { ObjectId },
} = require('mongoose')

module.exports = {
  member: {
    type: ObjectId,
    ref: 'Member',
    required: true,
  },
  country: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  zipCode: {
    type: String,
    trim: true,
  },
  lineOne: {
    type: String,
    trim: true,
  },
  lineTwo: {
    type: String,
    trim: true,
  },
  landmark: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    enum: ['primary', 'alternate'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
}
