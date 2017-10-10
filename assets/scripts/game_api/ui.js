'use strict'

const Handlebars = require('handlebars')
const app = require('../app.js')

const createGameSuccess = (data) => {
  app.game = data.game
  console.log(data)
  console.log(app.game)
  $('#save-game-btn').show()
  console.log('start button clicked')
  $('#grid-container').show()
  $('#game-prompt').html('Xavier always starts!')
  $('#restore-game-btn').hide()
  $('.new-game').hide()
}

const createGameFail = (error) => {
  console.error(error)
}

const updateGameSuccess = (cells, over, turn) => {
  console.log('updateGameSuccess')
  console.log(cells, over, turn)
  console.log('Updated game')
  const game = app.game
  console.log('Saving to local storage')
  console.log(game)
  game.cells = cells
  game.over = over
  game.turn = turn
  localStorage.game = JSON.stringify(game)
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

const restoreGameSuccess = (gameData) => {
  app.game = gameData
  console.log('restoreGameSuccess data: ')
  console.log(gameData)
  $('#game-history-container').hide()
  $('#grid-container').show()
  $('.cell').html('')
  $('.user-logout').disabled = false

  // $('.game.cell').on('click', function () {
  //   gameEvents.onPlaceMarker(this.id)
  // })
  const data = gameData
  console.log(data)
  const turn = gameData.turn

  // update the cells array with the values from game.cells
  const cells = [
    data.cells[0],
    data.cells[1],
    data.cells[2],
    data.cells[3],
    data.cells[4],
    data.cells[5],
    data.cells[6],
    data.cells[7],
    data.cells[8]
  ]
  // conditional if cell 0 === x, place xavier in inner html of '#0'
  // repeat for all 9 cells
  console.log(cells)
  cells.forEach(function (c, i, cells) {
    if (cells[i] === 'X') {
      $('#' + i).html("<img src='http://i.imgur.com/aqGAGvW.png' title='source: imgur.com' alt='Xavier the kitten' style='width:80px; height:80px'>")
    } else if (cells[i] === 'O') {
      $('#' + i).html("<img src='http://i.imgur.com/GUESkN4.png' title='source: imgur.com' alt='Oliver the kitten' style='width:80px; height:80px'>")
    }
  })
  $('.game-history').hide()
  $('.new-game').hide()
  $('#restore-game-btn').hide()
  $('#game-prompt').html('Previous game restored. It is ' + turn + '\'s turn')
  // if # of turns %2 === 0 , it's Xavier's turns
  // else it's Oliver's turn
}

const restoreGameFail = function () {
  $('#game-prompt').html('There is no incomplete game to restore. Please start a new game.')
  $('#restore-game-btn').hide()
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
  restoreGameSuccess,
  restoreGameFail
}
