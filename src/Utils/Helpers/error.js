function CustomError (status, message) {
  const error = new Error(message)
  error.status = status
  error.message = message
  return error
}
CustomError.prototype = Object.create(Error.prototype)

module.exports = {
  CustomError
}