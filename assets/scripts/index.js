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

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// Game identifies it is X's turn

// Player-x clicks a box to place marker

// Marker appears in that space

// Game checks for win

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
  $('#change-pw').on('click', authEvents.onChangePassword)
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
