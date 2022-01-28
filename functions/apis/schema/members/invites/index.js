const {
  Schema: { ObjectId },
} = require('mongoose')

module.exports = {
  instructor: {
    type: ObjectId,
    ref: 'Member',
    required: true,
  },
  target: {
    type: String,
    trim: true,
    required: 'target is required',
  },
  type: {
    required: 'type is required',
    type: String,
    enum: ['email', 'mobile'],
    default: 'email',
  },
  body: {
    type: String,
    trim: true,
    default:
      'Hi folk we are like to invite our iLMS platform, checks out thousand of courses & slots for your learning future',
  },
  count: {
    type: Number,
  },
  invitedAt: {
    type: Date,
    default: Date.now,
  },
  reinvitedAt: {
    type: Date,
  },
}
