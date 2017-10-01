'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const gameEvents = require('../game/turn.js')
const store = require('../store.js')

const onNewGame = function (event) {
  event.preventDefault()
  console.log('Creating new game')
  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.fail)
}

const onNewMove = function (cells, over, turn) {
  event.preventDefault()
  console.log('onNewMove')
  console.log(cells, over, turn)
  api.updateGame(cells, over, turn)
    .done(ui.updateGameSuccess(cells, over, turn))
    .fail(ui.fail)
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
  // api.restoreGame(gameId)
  const gameData = JSON.parse(localStorage.getItem('game'))
  console.log(gameData)
  if (gameData.over === true) {
    ui.restoreGameFail()
  } else {
    ui.restoreGameSuccess(gameData)
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
