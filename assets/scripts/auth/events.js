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
    .done(ui.success)
    .fail(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.fail)
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
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.fail)
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
  addHandlers
}
