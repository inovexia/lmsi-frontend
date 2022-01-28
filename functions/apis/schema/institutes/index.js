const {
  Schema: { ObjectId },
} = require('mongoose')

module.exports = {
  logo: {
    type: ObjectId,
    ref: 'MemberMedia',
  },
  banner: {
    type: ObjectId,
    ref: 'MemberMedia',
  },
  createdBy: {
    type: ObjectId,
    ref: 'Member',
    required: true,
  },
  handle: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
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
