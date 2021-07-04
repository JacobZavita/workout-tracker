const { model, Schema } = require('mongoose')

const User = new Schema({
  username: String,
  email: String
})

module.exports = model('User', User)