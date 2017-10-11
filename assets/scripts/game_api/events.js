'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onNewGame = function (event) {
  event.preventDefault()
  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.fail)
}

const onNewMove = function (cells, over, turn, moveCounter) {
  event.preventDefault()
  api.updateGame(cells, over, turn)
    .done(ui.updateGameSuccess(cells, over, turn, moveCounter))
    .fail(ui.fail)
}

const onGameHistory = function (event) {
  event.preventDefault()
  api.gameHistory()
    .done(ui.gameHistorySuccess)
    .fail(ui.fail)
}

const onSaveGame = function (event) {
  event.preventDefault()
}

const onRestoreGame = function (event) {
  event.preventDefault()
  // create a variable that holds the game object from localStorage
  const gameData = JSON.parse(localStorage.getItem('game'))
  // check if the game is over, if it is do not restore
  if (gameData.over === true) {
    ui.restoreGameFail()
    // if it is not over, restore
  } else if (gameData.player_x.id === app.user.id) {
    ui.restoreGameSuccess(gameData)
  } else {
    ui.restoreGameFail()
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
