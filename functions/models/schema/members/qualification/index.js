const {
  Schema: { ObjectId },
} = require('mongoose')

module.exports = {
  member: {
    type: ObjectId,
    ref: 'Member',
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  year: {
    type: Number,
  },
  document: {
    type: ObjectId,
    ref: 'MemberMedia',
    required: true,
  },
  duration: {
    type: Number,
  },
  marksObtained: {
    type: Number,
  },
  maximumMarks: {
    type: Number,
  },
  completed: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
}
