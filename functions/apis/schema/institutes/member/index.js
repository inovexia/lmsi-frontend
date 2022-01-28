const {
  Schema: { ObjectId },
} = require('mongoose')

module.exports = {
  member: {
    type: ObjectId,
    ref: 'Member',
    required: true,
  },
  institute: {
    type: ObjectId,
    ref: 'Institute',
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
}
