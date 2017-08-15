'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('onSignUp')
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.fail)
}

const onChangePassword = function (event) {
  console.log('change your password')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFail)
}

const addHandlers = () => {
//  $('.user-signup').on('submit', authEvents.onSignUp)
//  $('.user-login').on('submit', authEvents.onSignIn)
//  $('#change-pw').on('click', authEvents.onChangePassword)
//  $('#sign-out').on('submit', authEvents.onSignOut)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  addHandlers,
  app
}
