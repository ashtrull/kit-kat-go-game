'use strict'

const Handlebars = require('handlebars')
const app = require('../app.js')
const gameTurn = require('../game/turn.js')

const createGameSuccess = (data) => {
  app.game = data.game
  app.game.id = data.game.id
  console.log(data)
  console.log('Succeded')
  $('#save-game-btn').show()
}

const createGameFail = (error) => {
  console.error(error)
}

const updateGameSuccess = (data) => {
  console.log(data)
  console.log('Updated game')
  const game = data.game
  console.log('Saving to local storage')
  console.log(game)
  localStorage.setItem(data.game.id, JSON.stringify(game))
  localStorage.setItem('movecounter', JSON.stringify(gameTurn.moveCounter))
}

const updateGameFail = (error) => {
  console.error(error)
}

const gameHistorySuccess = (data) => {
  console.table(data.games)
  $('#game-history-table').remove()
  $('#grid-container').hide()
  $('#game-history-container').show()
  $('#game-start-content').hide()
  $('#game-history-btn').hide()
  $('#hide-game-history-btn').show()
  const gameData = data.games
  const createHTML = function (data) {
    const rawTemplate = $('#game-history-template').html()
    const compiledTemplate = Handlebars.compile(rawTemplate)
    const context = {
      games: data
    }
    const compiledHTML = compiledTemplate(context)
    $('#game-history-container').append(compiledHTML)
  }
  createHTML(gameData)
}

const restoreGameSuccess = (data) => {
  console.log('restoreGameSuccess data: ' + data)
  $('#game-history-container').hide()
  $('#grid-container').show()
  // update the cells array with the values from game.cells
  const restoredCells = [
    {index: 0, value: data.cells[0]},
    {index: 1, value: data.cells[1]},
    {index: 2, value: data.cells[2]},
    {index: 3, value: data.cells[3]},
    {index: 4, value: data.cells[4]},
    {index: 5, value: data.cells[4]},
    {index: 6, value: data.cells[6]},
    {index: 7, value: data.cells[7]},
    {index: 8, value: data.cells[8]}
  ]
  gameTurn.cells = restoredCells
  console.log(gameTurn.cells)
  // conditional if box 0 === x, place xavier in inner html of '#0'
  // repeat for all 9 cells
  // if # of turns %2 === 0 , it's Xavier's turns
  // else it's Oliver's turn
  gameTurn.cells.map(function (c) {
    if (c.value === 'X') {
      $('#' + c.index).html("<img src='http://i.imgur.com/aqGAGvW.png' title='source: imgur.com' alt='Xavier the kitten' style='width:80px; height:80px'>")
    } else if (c.value === 'O') {
      $('#' + c.index).html("<img src='http://i.imgur.com/GUESkN4.png' title='source: imgur.com' alt='Oliver the kitten' style='width:80px; height:80px'>")
    }
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
  gameHistorySuccess,
  restoreGameSuccess
}
