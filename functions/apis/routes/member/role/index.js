// Todo: CRUD operation on this route
const { Router } = require('express')

const {
  roleByName,
  roleByLevel,
  roleById,
  createRole,
  updateRole,
  deleteRole,
  getRoleByName,
  getRoleByLevel,
  getRoleById,
  getRoles
} = require('../../../controllers/member/role')
const roleRoute = Router()

// ? createRole at /c & /create
roleRoute.post('/c', createRole)
roleRoute.post('/create', createRole)

// ? updateRole at /u/:roleId & /update/:roleId
roleRoute.put('/u/:roleId', updateRole)
roleRoute.put('/update/:roleId', updateRole)

// ? deleteRole at /d/:roleId & /delete/:roleId
roleRoute.delete('/d/:roleId', deleteRole)
roleRoute.delete('/delete/:roleId', deleteRole)

// ? getRoleByName at /n/:name & /name/:name
roleRoute.get('/n/:name', getRoleByName)
roleRoute.get('/name/:name', getRoleByName)

// ? getRoleByLevel at /l/:level & /level/:level
roleRoute.get('/l/:level', getRoleByLevel)
roleRoute.get('/level/:level', getRoleByLevel)

// ? getRoleById at /:roleId
roleRoute.get('/:roleId', getRoleById)

// ? Get All Roles at /
roleRoute.get('/', getRoles)

roleRoute.param('name', roleByName)
roleRoute.param('level', roleByLevel)
roleRoute.param('roleId', roleById)

exports.roleRoute = roleRoute
