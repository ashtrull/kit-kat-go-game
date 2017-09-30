'use strict'

const Handlebars = require('handlebars')
const app = require('../app.js')
const gameEvents = require('../game/turn.js')

const createGameSuccess = (data) => {
  app.game = data.game
  app.game.id = data.game.id
  console.log(data)
  $('#save-game-btn').show()
  console.log('start button clicked')
  $('#grid-container').show()
  $('#game-prompt').html('Xavier always starts!')
}

const createGameFail = (error) => {
  console.error(error)
}

const updateGameSuccess = (data) => {
  console.log('updateGameSuccess')
  console.log(data)
  console.log('Updated game')
  const game = data.game
  console.log('Saving to local storage')
  console.log(game)
  localStorage.game = JSON.stringify(game)
  console.log(gameEvents.moveCounter)
  localStorage.movecounter = JSON.stringify(gameEvents.moveCounter)
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
  console.log('restoreGameSuccess data: ')
  console.log(data)
  app.game = data
  $('#game-history-container').hide()
  $('#grid-container').show()
  $('.cell').html('')

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

  cells.forEach(function (c, i, cells) {
    if (cells[i] === 'X') {
      $('#' + i).html("<img src='http://i.imgur.com/aqGAGvW.png' title='source: imgur.com' alt='Xavier the kitten' style='width:80px; height:80px'>")
    } else if (cells[i] === 'O') {
      $('#' + i).html("<img src='http://i.imgur.com/GUESkN4.png' title='source: imgur.com' alt='Oliver the kitten' style='width:80px; height:80px'>")
    }
  })

  $('.game.cell').html('')
  $('.game.cell').on('click', function () {
    gameEvents.onPlaceMarker(this.id)
  })
  $('.game-history').hide()
  // if # of turns %2 === 0 , it's Xavier's turns
  // else it's Oliver's turn
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
