'use strict'

const app = require('../app.js')

const createGameSuccess = (data) => {
  app.game = data.game
  app.game.id = data.game.id
  console.log(data)
  console.log('Succeded')
}

const createGameFail = (error) => {
  console.error(error)
}

const updateGameSuccess = (data) => {
  console.log(data)
  console.log('Updated game')
}

const updateGameFail = (error) => {
  console.error(error)
}

const gameHistorySuccess = (data) => {
  console.table(data.games)
  $('.game-history').show()
  const gameArray = data.games
  gameArray.forEach(function (game) {
    $('.game-history-table').append('<tr><td>' + game.id + '</td><td' + game.done + '</td></tr>')
  })
}

const success = (data) => {
  console.log(data)
}

const fail = (error) => {
  console.error(error)
}

module.exports = {
  fail,
  success,
  createGameSuccess,
  createGameFail,
  updateGameSuccess,
  updateGameFail,
  gameHistorySuccess
}
