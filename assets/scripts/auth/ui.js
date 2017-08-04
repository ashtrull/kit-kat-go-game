'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  console.log('Successfully signed in!')
  $('#sign-in-prompt').text('Signed in')
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('Successfully signed out!')
  $('Sign in to play!')
}

const changePasswordSuccess = () => {
  console.log('Password successfully changed.')
}

const success = (data) => {
  console.log(data)
}

const fail = (error) => {
  console.error(error)
}

module.exports = {
  fail,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
