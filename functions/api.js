// ? For accessing .env file variables
require('dotenv').config()

const express = require('express'),
  // db = require('mongoose'),
  serverless = require('serverless-http'),
  { Router } = express,
  app = express(),
  apiRoute = Router()

// db.connect(
//   process.env.NODE_ENV === 'development'
//     ? process.env.LOCAL_MONGO_URI
//     : process.env.REMOTE_MONGO_URI
// )

// db.connection.on('connected', () => console.log(`DB connected successfully`))

// db.connection.on('error', error => console.error(error.message))

apiRoute.get('/', (req, res) =>
  res.status(200).json({
    message: 'Ping Successful API Server Running...',
    mongoURL: process.env.REMOTE_MONGO_URI
  })
)

apiRoute.get('/users', (req, res) =>
  res.json({
    users: [
      {
        name: 'steve'
      },
      {
        name: 'joe'
      }
    ]
  })
)

apiRoute.get('/hello', (req, res) => res.json({ msg: 'hello world' }))

app.use([express.urlencoded({ extended: true }), express.json()])

app.use('/api', apiRoute)

// Export lambda handler
exports.handler = serverless(app)

// /* eslint-disable no-undef */
// // ? For absolute path enable import function instead of require
// const fs = require('fs')
// global.include = z => {
//   let x = __dirname.replace(/\\/g, '/')
//   let y = x.replace('/node_modules/node-absolute-path', '')
//   let ext = ['', '.ts', '.tsx', '.js', '.jsx', '.html', '.css', '.png', '.jpg']
//   for (let i = 0; i < ext.length; i++) {
//     if (fs.existsSync(`${y}/${z}${ext[i]}`)) {
//       z = `${y}/${z}`
//     }
//   }
//   return require(z)
// }

// // ? For accessing .env file variables
// require('dotenv').config()

// const express = require('express'),
//   db = require('mongoose'),
//   serverless = require('serverless-http'),
//   { apiRoute } = include('routes'),
//   app = express()

// db.connect(
//   process.env.NODE_ENV === 'development'
//     ? process.env.LOCAL_MONGO_URI
//     : process.env.REMOTE_MONGO_URI
// )

// db.connection.on('connected', () => console.log(`DB connected successfully`))

// db.connection.on('error', error => console.error(error.message))

// // apiRoute.get('/', (req, res) =>
// //   res.status(200).json({ message: 'Ping Successful API Server Running...' })
// // )

// // apiRoute.get('/users', (req, res) =>
// //   res.json({
// //     users: [
// //       {
// //         name: 'steve'
// //       },
// //       {
// //         name: 'joe'
// //       }
// //     ]
// //   })
// // )

// // apiRoute.get('/hello', (req, res) => res.json({ msg: 'hello world' }))

// app.use([express.urlencoded({ extended: true }), express.json()])

// app.use('/api', apiRoute)

// // Export lambda handler
// exports.handler = serverless(app)
