'use strict'
const app = require('../app.js')
const config = require('../config.js')

// AJAX POST for new game
const createGame = function (data) {
  console.log(app.user.token)
  console.log(data)
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const index = function () {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateGame = function (index, value, over) {
  console.log(index, value, over)
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

const endGame = function (over) {
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'over': over
      }
    }
  })
}

// const joinGame = function (data) {
//   return $.ajax({
//     url: app.host + '/games/' + data.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token' + app.user.token
//     },
//     data: data
//   })
// }

const showGame = function (id) {
  return $.ajax({
    url: app.host + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token' + app.user.token
    }
  })
}

module.exports = {
  app,
  config,
  createGame,
  index,
  updateGame,
  endGame,
  // joinGame,
  showGame
}
