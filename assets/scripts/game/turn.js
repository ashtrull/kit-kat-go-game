'use strict'
const boardEvents = require('../index.js')
const gameApi = require('../game_api/events.js')

// turn counter
let turn = 'Oliver'

// an array to set up the game board like this:
//  0  |  1  |  2  |
//  ---------------
//  3  |  4  |  5  |
//  ---------------
//  6  |  7  |  8  |

const cells = [
  {index: 0, value: 0},
  {index: 1, value: 0},
  {index: 2, value: 0},
  {index: 3, value: 0},
  {index: 4, value: 0},
  {index: 5, value: 0},
  {index: 6, value: 0},
  {index: 7, value: 0},
  {index: 8, value: 0}
]

// move counter to keep track of when the board is full:
let moveCounter = 0

// score counter for each player:
let xScore = 0
let oScore = 0

let value
let index
let over

// function to put the cat marker in the box clicked:
const onPlaceMarker = function (id) {
  // checks who's turn it is and if the box is empty to place the marker:
  if (turn === 'Xavier' && cells[id].value === 0) {
    cells[id].value = 'X'
    // document.getElementById(id).innerHTML = "<img src='http://i.imgur.com/aqGAGvW.png' title='source: imgur.com' alt='Xavier the kitten' style='width:80px; height:80px'>"
    console.log(cells)
    checkForWin()
    index = id
    value = cells[id].value
    gameApi.onNewMove(index, value, over)
  } else if (turn === 'Oliver' && cells[id].value === 0) {
    cells[id].value = 'O'
    console.log('marked O')
    // document.getElementById(id).innerHTML = "<img src='http://i.imgur.com/GUESkN4.png' title='source: imgur.com' alt='Oliver the kitten' style='width:80px; height:80px'>"
    // after placing the marker, check for a win
    console.log(cells)
    checkForWin()
    index = id
    value = cells[id].value
    gameApi.onNewMove(index, value, over)
  }
  cells.map(function (c) {
    if (c.value === 'X') {
      $('#' + c.index).html("<img src='http://i.imgur.com/aqGAGvW.png' title='source: imgur.com' alt='Xavier the kitten' style='width:80px; height:80px'>")
    } else if (c.value === 'O') {
      $('#' + c.index).html("<img src='http://i.imgur.com/GUESkN4.png' title='source: imgur.com' alt='Oliver the kitten' style='width:80px; height:80px'>")
    }
  })
  console.log(cells)
}

// If someone has won, this function changes the game prompt and scoreboard
const winFunc = function () {
  console.log(turn + ' wins!')
  $('#game-prompt').html(turn + ' wins! Game Over.')
  $('.game.box').off()
  over = true
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

// If no one has one after the turn, change the prompt based on if the game is still going or if the board is full (game over)
const noWin = function () {
  moveCounter += 1
  console.log('Move count is ' + moveCounter)
  // game over process if all cells are full:
  if (moveCounter >= 9) {
    $('#game-prompt').html('Cat\'s Game! Game Over.')
    over = true
    return over
    // if its x's turn:
  } else if (turn === 'Xavier') {
    turn = 'Oliver'
    console.log('Turn:' + turn)
    $('#game-prompt').html('It is ' + turn + '\'s turn!')
    over = false
    return over
    // if it's o's turn:
  } else if (turn === 'Oliver') {
    turn = 'Xavier'
    console.log('Turn:' + turn)
    $('#game-prompt').html('It is ' + turn + '\'s turn!')
    over = false
    return over
  }
}

const checkForWin = function () {
  // checks for horizontal win:
  if (cells[0].value !== 0 && cells[0].value === cells[1].value && cells[0].value === cells[2].value) {
    winFunc()
  } else if (cells[3].value !== 0 && cells[3].value === cells[4].value && cells[3].value === cells[5].value) {
    winFunc()
  } else if (cells[6].value !== 0 && cells[6].value === cells[7].value && cells[6].value === cells[8].value) {
    winFunc()
    // checks for vertical win:
  } else if (cells[0].value !== 0 && cells[0].value === cells[3].value && cells[0].value === cells[6].value) {
    winFunc()
  } else if (cells[1].value !== 0 && cells[1].value === cells[4].value && cells[1].value === cells[7].value) {
    winFunc()
  } else if (cells[2].value !== 0 && cells[2].value === cells[5].value && cells[2].value === cells[8].value) {
    winFunc()
    // checks for diagonal win top left to bottom right:
  } else if (cells[0].value !== 0 && cells[0].value === cells[4].value && cells[0].value === cells[8].value) {
    winFunc()
    // checks for diagonal win bottom left to top right:
  } else if (cells[6].value !== 0 && cells[6].value === cells[4].value && cells[6].value === cells[2].value) {
    winFunc()
    // what to do if no win on this turn
  } else {
    noWin()
  }
}

// function to reset the game when the button is clicked
const resetGame = function () {
  console.log('game reset')
  $('.game.box').html('')
  cells[0].value = 0
  cells[1].value = 0
  cells[2].value = 0
  cells[3].value = 0
  cells[4].value = 0
  cells[5].value = 0
  cells[6].value = 0
  cells[7].value = 0
  cells[8].value = 0
  moveCounter = 0
  console.log('The cells are ' + cells)
  turn = 'Xavier'
  $('.game.box').on('click', function () {
    onPlaceMarker(this.id)
  })
  $('.game-history').hide()
  return cells
}

module.exports = {
  turn,
  onPlaceMarker,
  checkForWin,
  winFunc,
  boardEvents,
  resetGame,
  value,
  index,
  over
}
