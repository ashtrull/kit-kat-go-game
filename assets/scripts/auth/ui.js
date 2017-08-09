'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('Successfully signed in!')
  $('#sign-in-prompt').text('Signed in as ' + data.user.email)
  $('')
}

const signOutSuccess = (data) => {
  app.user = null
  console.log(data)
  console.log('Successfully signed out!')
  $('#sign-in-prompt').text('Sign in to play!')
}

const changePasswordSuccess = () => {
  console.log('Password successfully changed.')
  $('#sign-in-prompt').text('Password successfully changed. Signed in as' + app.user)
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
