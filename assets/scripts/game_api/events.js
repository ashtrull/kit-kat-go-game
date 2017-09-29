'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onNewGame = function (event) {
  event.preventDefault()
  console.log('Creating new game')
  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.fail)
}

const onNewMove = function (index, value, over) {
  event.preventDefault()
  console.log(index, value, over)
  console.log('Adding new move')
  api.updateGame(index, value, over)
    .done(ui.updateGameSuccess)
    .fail(ui.fail)
  console.log(index, value, over)
}

const onGameHistory = function (event) {
  event.preventDefault()
  console.log('Getting game history')
  api.gameHistory()
    .done(ui.gameHistorySuccess)
    .fail(ui.fail)
}

const onSaveGame = function (event) {
  event.preventDefault()
  console.log('onSaveGame')
}

const onRestoreGame = function (event) {
  event.preventDefault()
  console.log('onRestoreGame')
  console.log(event.target)
  const gameId = $(event.target).data('id')
  console.log('game id: ' + gameId)
  // api.restoreGame(gameId)
  const gameData = JSON.parse(localStorage.getItem(gameId))
  console.log(localStorage.getItem(gameId))
  console.log(gameData)
  if (localStorage.getItem(gameId)) {
    ui.restoreGameSuccess(gameData)
  } else {
    ui.fail()
  }
}

module.exports = {
  app,
  getFormFields,
  onNewGame,
  onNewMove,
  // onGameOver,
  onGameHistory,
  onSaveGame,
  onRestoreGame
}
