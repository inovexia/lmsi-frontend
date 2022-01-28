// Todo: CRUD operation on this route
const { Router } = require('express'),
  { roleRoute } = include('routes/member/role'),
  {
    memberByUserName,
    memberById,
    createMember,
    updateMember,
    deleteMember,
    getMemberByUserName,
    getMemberById,
    getMembers,
  } = include('controllers/member'),
  memberRoute = Router()

memberRoute.use('/role', roleRoute)

// ? createMember at /c & /create
memberRoute.post('/c', createMember)
memberRoute.post('/create', createMember)

// ? updateMember at /u/:memberId & /update/:memberId
memberRoute.put('/u/:memberId', updateMember)
memberRoute.put('/update/:memberId', updateMember)

// ? deleteMember at /d/:memberId & /delete/:memberId
memberRoute.delete('/d/:memberId', deleteMember)
memberRoute.delete('/delete/:memberId', deleteMember)

// ? getMemberById at /id/:memberId
memberRoute.get('/id/:memberId', getMemberById)

// ? getMemberByUserName at /:userName
memberRoute.get('/:userName', getMemberByUserName)

// ? Get All Members at /
memberRoute.get('/', getMembers)

memberRoute.param('userName', memberByUserName)
memberRoute.param('memberId', memberById)

exports.memberRoute = memberRoute
