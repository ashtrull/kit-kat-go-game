'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const boardEvents = require('./game/turn.js')
const authEvents = require('./auth/events.js')
const apiEvents = require('./game_api/events.js')

$(() => {
  setAPIOrigin(location, config)
})

require('./example')

$(() => {
  $(function() {
    $('#grid-container').hide()
    $('.new-game').hide()
    $('.user-logout').hide()
    $('#change-pw').hide()
    $('#game-history-container').hide()
    $('#game-history-btn').hide()
    $('#hide-game-history-btn').hide()
    $('#save-game-btn').hide()
    $('#game-start-content  ').hide()
  })

  $('.game.cell').on('click', function() {
    boardEvents.onPlaceMarker(this.id)
  })
  // $('.start').on('click', function () {
  //  ('.start').on()
  // })
  $('.user-signup').on('submit', authEvents.onSignUp)
  $('.user-login').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('.user-logout').on('submit', authEvents.onSignOut)
  $('#game-history-btn').on('click', apiEvents.onGameHistory)
  $('#hide-game-history-btn').on('click', function () {
    $('#game-history-container').hide()
    $('#grid-container').show()
    $('#game-start-content').show()
    $('#game-history-btn').show()
    $('#hide-game-history-btn').hide()
  })
  $('#save-game-btn').on('click', apiEvents.onSaveGame)
  $('#restore-game-btn').on('click', boardEvents.setCells)
    .on('click', apiEvents.onRestoreGame)
  $('.new-game').on('submit', apiEvents.onNewGame)
    .on('submit', function () {
      $('#grid-container').show()
      boardEvents.resetGame()
      $('#game-prompt').html('Xavier always starts!')
    })
})

// TODO Message " __ wins! " or "Game over. Play again?"

// TODO If win, add 1 point to the game winner's score

// TODO Players can search for an existing game to continue

// TODO Game stored in incomplete or complete stage

module.exports = {
  boardEvents
}
