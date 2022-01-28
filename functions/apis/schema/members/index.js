const {
  models,
  Schema,
  Schema: { ObjectId }
} = require('mongoose')

module.exports = Schema({
  role: {
    type: ObjectId,
    ref: 'Role',
    required: true,
    default: '61eb9a74cfa61e54b8d88f25'
  },
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  userName: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  emailVerified: Boolean,
  mobile: {
    type: Number,
    validate: {
      validator: async mobile =>
        (await models.Member.countDocuments({ mobile })) === 0,
      message: `"{VALUE}" already exist.`
    }
  },
  mobileVerified: Boolean,
  hashed_password: {
    type: String,
    required: true
  },
  salt: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
})
