const { model } = require('mongoose'),
  membersSchema = require('../../schema/members')

exports.Member = model('Member', membersSchema)
