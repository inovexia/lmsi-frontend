const moment = require('moment')

exports.timeStampNow = () => {
  return moment()
}

exports.utcNow = () => {
  return moment().utc()
}

exports.timeUnixNow = () => {
  return moment().unix()
}

exports.utcUnixNow = () => {
  return moment().utc().unix()
}

exports.dayStartToday = () => {
  return moment().startOf('day')
}

exports.unixDayStartToday = () => {
  return moment().startOf('day').unix()
}

exports.utcDayStartToday = () => {
  return moment().utc().startOf('day')
}

exports.utcUnixDayStartToday = () => {
  return moment().utc().startOf('day').unix()
}

exports.dayEndToday = () => {
  return moment().endOf('day')
}

exports.unixDayEndToday = () => {
  return moment().endOf('day').unix()
}

exports.utcDayEndToday = () => {
  return moment().utc().endOf('day')
}

exports.utcUnixDayEndToday = () => {
  return moment().utc().endOf('day').unix()
}
