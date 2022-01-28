/* example using https://github.com/dougmoscrop/serverless-http */
const serverless = require('serverless-http'),
  { expressApp } = require('./apis')

const app = expressApp()

exports.handler = serverless(app)
