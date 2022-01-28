const {
  Schema: { ObjectId },
} = require('mongoose')

module.exports = {
  member: {
    type: ObjectId,
    ref: 'Member',
    required: true,
  },
  about: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'other'],
  },
  dob: {
    type: Date,
  },
  occupation: {
    type: String,
  },
  institutionName: {
    type: String,
  },
  interest: {
    type: Array,
  },
  videoLink: {
    type: String,
  },
  facebookLink: {
    type: String,
  },
  linkedinLink: {
    type: String,
  },
  twitterLink: {
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
