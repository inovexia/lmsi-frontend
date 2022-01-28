const { model } = require('mongoose'),
  rolesSchema = require('../../../schema/members/roles')

exports.Role = model('Role', rolesSchema)
