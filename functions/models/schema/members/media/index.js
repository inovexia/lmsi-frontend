const {
  Schema: { ObjectId },
} = require('mongoose')

module.exports = {
  member: {
    type: ObjectId,
    ref: 'Member',
    required: true,
  },
  key: {
    type: String,
    trim: true,
    required: 'key is required',
  },
  type: {
    required: 'type is required',
    type: String,
    enum: ['image', 'doc', 'video', 'other'],
    default: 'image',
  },
  location: {
    type: String,
    required: 'location is required',
  },
  size: {
    type: Number,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
}
