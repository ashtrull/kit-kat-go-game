'use strict'
const app = require('../app.js')
const config = require('../config.js')

// AJAX POST for new account
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up',
    headers: {'header': 'Content-Type: application/json'},
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}
// AJAX POST log in for existing account
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const signOut = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'passwords': {
        'old': data.credentials.password,
        'new': data.credentials.newpassword
      }
    }
  })
}

// TODO const createGame

// TODO const updateMoves

const showGames = function (data) {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token' + app.user.token
    }
  })
}

module.exports = {
  app,
  config,
  signUp,
  signIn,
  changePassword,
  signOut,
  showGames
}
