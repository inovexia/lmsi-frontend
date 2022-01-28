const { Role } = require('../../../models/members/roles'),
  { extend } = require('lodash'),
  { StatusCodes } = require('../../../constants/status-codes')

exports.roleByName = (req, res, next, name) => {
  Role.findOne(
    { name: { $eq: name } },
    { level: 1, name: 1, status: 1 },
    (err, role) => {
      if (err || !role) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          error: 'Role not found'
        })
      }
      req.role = role
      next()
    }
  )
}

exports.roleByLevel = (req, res, next, level) => {
  Role.findOne(
    { level: { $eq: level } },
    { level: 1, name: 1, status: 1 },
    (err, role) => {
      if (err || !role) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          error: 'Role not found'
        })
      }
      req.role = role
      next()
    }
  )
}

exports.roleById = (req, res, next, roleId) => {
  Role.findById(roleId, { level: 1, name: 1, status: 1 }, (err, role) => {
    if (err || !role) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: 'Role not found'
      })
    }
    req.role = role
    next()
  })
}

exports.createRole = (req, res) => {
  try {
    const role = new Role(req.body)
    role.save((error, role) => {
      if (error) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: { code: error.code, message: error.message } })
      }
      res
        .status(StatusCodes.OK)
        .json({ message: 'Role created successfully.', role })
    })
  } catch (error) {
    console.error(error)
    return res.status(StatusCodes.BAD_REQUEST).json({ error })
  }
}

exports.updateRole = (req, res) => {
  // extend - mutate the source object
  const role = extend(req.role, req.body)
  role.save(error => {
    if (error) {
      console.error(error)
      return res.status(StatusCodes.BAD_REQUEST).json({ error })
    }
    res
      .status(StatusCodes.OK)
      .json({ message: 'Role updated successfully.', role })
  })
}

exports.deleteRole = (req, res) => {
  const role = req.role
  role.remove((err, xRole) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: err
      })
    }
    res.json({ message: 'Role deleted successfully', xRole })
  })
}

exports.getRoleByName = (req, res) => {
  res.status(StatusCodes.OK).json(req.role)
}

exports.getRoleByLevel = (req, res) => {
  res.status(StatusCodes.OK).json(req.role)
}

exports.getRoleById = (req, res) => {
  res.status(StatusCodes.OK).json(req.role)
}

exports.getRoles = (req, res) => {
  Role.find()
    .then(roles =>
      res.status(StatusCodes.OK).json({
        roles
      })
    )
    .catch(error =>
      res.status(StatusCodes.BAD_REQUEST).json({
        error: error.message
      })
    )
}
