'use strict'
const boardEvents = require('../index.js')
const gameApi = require('../game_api/events.js')
const app = require('../app.js')

// turn counter
let turn = 'Oliver'

let cells = []

// an array to set up the game board like this:
//  0  |  1  |  2  |
//  ---------------
//  3  |  4  |  5  |
//  ---------------
//  6  |  7  |  8  |

// function to reset the board when the start button is clicked
const resetGame = function () {
  $('.game.cell').html('')
  cells = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]
  moveCounter = 0
  turn = 'Xavier'
  $('.game.cell').on('click', function () {
    onPlaceMarker(this.id)
  })
  $('.game-history').hide()
  return cells
}

// function to set the board when a game is restored
const setCells = function () {
  const data = JSON.parse(localStorage.getItem('game'))
  cells = data.cells
  turn = data.turn
  moveCounter = data.moveCounter
  return cells
}

// move counter to keep track of when the board is full:
let moveCounter = 0

// score counter for each player:
let xScore = 0
let oScore = 0

let value
let index
let over

// function to put the cat marker in the cell clicked:
const onPlaceMarker = function (id) {
  const cells = app.game.cells
  // checks who's turn it is and if the cell is empty to place the marker:
  if (turn === 'Xavier' && cells[id] === '') {
    cells[id] = 'X'
    checkForWin()
    gameApi.onNewMove(cells, over, turn, moveCounter)
  } else if (turn === 'Oliver' && cells[id] === '') {
    cells[id] = 'O'
    // after placing the marker, check for a win
    checkForWin()
    gameApi.onNewMove(cells, over, turn, moveCounter)
  }

  cells.forEach(function (c, i, cells) {
    if (cells[i] === 'X') {
      $('#' + i).html("<img src='https://i.imgur.com/aqGAGvW.png' title='source: imgur.com' alt='Xavier the kitten' style='width:80px; height:80px'>")
    } else if (cells[i] === 'O') {
      $('#' + i).html("<img src='https://i.imgur.com/GUESkN4.png' title='source: imgur.com' alt='Oliver the kitten' style='width:80px; height:80px'>")
    }
  })
}

// If someone has won, this function changes the game prompt and scoreboard
const winFunc = function () {
  $('#game-prompt').html(turn + ' wins! Game Over.')
  $('.game.cell').off()
  $('.new-game').show()
  over = true
  localStorage.clear()
  if (turn === 'Xavier') {
    xScore += 1
    $('#xscore').html(xScore)
    return xScore
  } else if (turn === 'Oliver') {
    oScore += 1
    $('#oscore').html(oScore)
    return oScore
  }
  return over
}

// If no one has won after the turn, change the prompt based on if the game is still going or if the board is full (game over)
const noWin = function () {
  moveCounter += 1
  // game over process if all cells are full:
  if (moveCounter >= 9) {
    $('#game-prompt').html('Cat\'s Game! Game Over.')
    $('.new-game').show()
    over = true
    localStorage.clear()
    return over
    // if its x's turn:
  } else if (turn === 'Xavier') {
    turn = 'Oliver'
    $('#game-prompt').html('It is ' + turn + '\'s turn!')
    over = false
    return over
    // if it's o's turn:
  } else if (turn === 'Oliver') {
    turn = 'Xavier'
    $('#game-prompt').html('It is ' + turn + '\'s turn!')
    over = false
    return over
  }
}

const checkForWin = function () {
  const cells = app.game.cells
  // checks for horizontal win:
  if (cells[0] !== '' && cells[0] === cells[1] && cells[0] === cells[2]) {
    winFunc()
  } else if (cells[3] !== '' && cells[3] === cells[4] && cells[3] === cells[5]) {
    winFunc()
  } else if (cells[6] !== '' && cells[6] === cells[7] && cells[6] === cells[8]) {
    winFunc()
    // checks for vertical win:
  } else if (cells[0] !== '' && cells[0] === cells[3] && cells[0] === cells[6]) {
    winFunc()
  } else if (cells[1] !== '' && cells[1] === cells[4] && cells[1] === cells[7]) {
    winFunc()
  } else if (cells[2] !== '' && cells[2] === cells[5] && cells[2] === cells[8]) {
    winFunc()
    // checks for diagonal win top left to bottom right:
  } else if (cells[0] !== '' && cells[0] === cells[4] && cells[0] === cells[8]) {
    winFunc()
    // checks for diagonal win bottom left to top right:
  } else if (cells[6] !== '' && cells[6] === cells[4] && cells[6] === cells[2]) {
    winFunc()
    // what to do if no win on this turn
  } else {
    noWin()
  }
}

// function to reset the game when the button is clicked

module.exports = {
  turn,
  setCells,
  onPlaceMarker,
  checkForWin,
  winFunc,
  boardEvents,
  resetGame,
  value,
  index,
  over
}
