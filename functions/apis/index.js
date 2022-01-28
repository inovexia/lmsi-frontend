// ? For accessing .env file variables
require('dotenv').config()

exports.expressApp = () => {
  const express = require('express'),
    db = require('mongoose'),
    { apiRoute } = require('./routes'),
    app = express()

  db.connect(
    process.env.NODE_ENV === 'development'
      ? process.env.LOCAL_MONGO_URI
      : process.env.REMOTE_MONGO_URI
  )

  db.connection.on('connected', () => console.log(`DB connected successfully`))

  db.connection.on('error', error => console.error(error.message))

  // apiRoute.get('/', (req, res) =>
  //   res.status(200).json({ message: 'Ping Successful API Server Running...' })
  // )

  // apiRoute.get('/users', (req, res) =>
  //   res.json({
  //     users: [
  //       {
  //         name: 'steve'
  //       },
  //       {
  //         name: 'joe'
  //       }
  //     ]
  //   })
  // )

  // apiRoute.get('/hello', (req, res) => res.json({ msg: 'hello world' }))

  app.use([express.urlencoded({ extended: true }), express.json()])

  app.use('/api', apiRoute)

  return app
}
