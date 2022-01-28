const { Member } = require('../../models/members'),
  { extend } = require('lodash'),
  { StatusCodes } = require('../../constants/status-codes')

exports.memberById = (req, res, next, memberId) => {
  Member.findById(memberId)
    .populate('role')
    .then(member => {
      req.member = member
      next()
    })
    .catch(error =>
      res.status(StatusCodes.BAD_REQUEST).json({
        error: error.message
      })
    )
}

exports.memberByUserName = (req, res, next, userName) => {
  Member.findOne({ userName: { $eq: userName } })
    .populate('role')
    .then(member => {
      req.member = member
      next()
    })
    .catch(error =>
      res.status(StatusCodes.BAD_REQUEST).json({
        error: error.message
      })
    )
}

exports.createMember = (req, res) => {
  try {
    const member = new Member(req.body)
    member.save((error, member) => {
      if (error) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: { code: error.code, message: error.message } })
      }
      return res
        .status(StatusCodes.OK)
        .json({ message: 'Member created successfully.', member })
    })
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error })
  }
}

exports.updateMember = (req, res) => {
  if (!req.member) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Member not found' })
  }

  // extend - mutate the source object
  const member = extend(req.member, req.body)
  member.save(error => {
    if (error) {
      console.error(error)
      return res.status(StatusCodes.BAD_REQUEST).json({ error })
    }
    res
      .status(StatusCodes.OK)
      .json({ message: 'Member updated successfully.', member })
  })
}

exports.deleteMember = (req, res) => {
  const member = req.member
  member
    ? member.remove((err, xMember) => {
        if (err) {
          return res.status(StatusCodes.BAD_REQUEST).json({
            error: err
          })
        }
        res.json({ message: 'Member deleted successfully', xMember })
      })
    : res.status(StatusCodes.BAD_REQUEST).json({ error: 'Member not found' })
}

exports.getMemberById = (req, res) => {
  req.member
    ? res.status(StatusCodes.OK).json(req.member)
    : res.status(StatusCodes.BAD_REQUEST).json({ error: 'Member not found' })
}

exports.getMemberByUserName = (req, res) => {
  req.member
    ? res.status(StatusCodes.OK).json(req.member)
    : res.status(StatusCodes.BAD_REQUEST).json({ error: 'Member not found' })
}

exports.getMembers = (req, res) => {
  Member.find()
    .populate('role')
    .then(members =>
      res.status(StatusCodes.OK).json({
        members
      })
    )
    .catch(error =>
      res.status(StatusCodes.BAD_REQUEST).json({
        error: error.message
      })
    )
}
