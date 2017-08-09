'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./game/events.js')
const boxes = require('./game/events.js')
const boardEvents = require('./game/turn.js')
const authEvents = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
})

require('./example')

$(() => {
  $(function () {
    $('#grid-container').hide()
    $('.start').hide()
  })
  $('#sign-in-button').on('click', function () {
    $('.start').show()
  })
  $('.start').on('click', function () {
    $('#grid-container').show()
    boardEvents.resetGame()
    $('#game-prompt').html('Xavier always starts!')
  })

  $('.game.box').on('click', function () {
    boardEvents.onPlaceMarker(this.id)
  })
  // $('.start').on('click', function () {
  //  ('.start').on()
  // })
  $('.user-signup').on('submit', authEvents.onSignUp)
  $('.user-login').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('.user-logout').on('submit', authEvents.onSignOut)
})

// TODO Message " __ wins! " or "Game over. Play again?"

// TODO If win, add 1 point to the game winner's score

// TODO Players can search for an existing game to continue

// TODO Game stored in incomplete or complete stage

module.exports = {
  gameEvents,
  boxes,
  boardEvents
}
