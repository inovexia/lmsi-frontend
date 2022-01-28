/* eslint-disable no-undef */
const { Router } = require('express') //,
// { graphqlHTTP } = require('express-graphql'),
// { buildSchema } = require('graphql')

const apiDocs = include('docs/api.json'),
  { StatusCodes } = include('constants/status-codes'),
  // { schema } = require('graphql'),
  // // graphqlResolvers = require('../graphql/resolvers'),
  { memberRoute } = include('routes/member'),
  apiRoute = Router()

// apiRoute.use('/auth', authRoute)
apiRoute.use('/member', memberRoute)
// apiRoute.use('/role', roleRoute)

// apiRoute.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     graphiql: true,
//   })
// )

apiRoute.get('/', (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ message: 'Ping Successful API Server Running...', apis: apiDocs })
})

apiRoute.use((req, res, next) => {
  return res.status(StatusCodes.NOT_FOUND).json({ error: 'Path Not found' })
})

exports.apiRoute = apiRoute
