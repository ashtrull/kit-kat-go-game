'use strict'
const boardEvents = require('../index.js')
const gameApi = require('../game_api/events.js')

// const checkWin = require('./win.js')
// turn counter
let turn = 'Oliver'
// turn prompt
// if (turn === 'Xavier') {
//  console.log('It is ' + turn + '\'s turn!')
// } else if (turn === 'Oliver') {
//  console.log('It is ' + turn + '\'s turn!')
// }

// an array to set up the game board like this:
//  0  |  1  |  2  |
//  ---------------
//  3  |  4  |  5  |
//  ---------------
//  6  |  7  |  8  |

const boxes = [
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

// function to put the cat marker in the box clicked:
const onPlaceMarker = function (id) {
  if (turn === 'Xavier') {
    console.log('It is ' + turn + '\'s turn!')
  } else if (turn === 'Oliver') {
    console.log('It is ' + turn + '\'s turn!')
  }
  // checks who's turn it is and if the box is empty:
  if (turn === 'Xavier' && boxes[id].value === 0) {
    boxes[id].value = 'X'
    document.getElementById(id).innerHTML = "<img src='http://i.imgur.com/aqGAGvW.png' title='source: imgur.com' alt='Xavier the kitten' style='width:80px; height:80px'>"
    console.log(boxes)
    checkForWin()
  } else if (turn === 'Oliver' && boxes[id].value === 0) {
    boxes[id].value = 'O'
    console.log('marked O')
    document.getElementById(id).innerHTML = "<img src='http://i.imgur.com/GUESkN4.png' title='source: imgur.com' alt='Oliver the kitten' style='width:80px; height:80px'>"
    // after placing the marker, check for a win
    console.log(boxes)
    checkForWin()
  }
  return boxes
}

const winFunc = function () {
  console.log(turn + ' wins!')
  $('#game-prompt').html(turn + ' wins! Game Over.')
  $('.game.box').off()
  gameApi.onGameOver()
  if (turn === 'Xavier') {
    xScore += 1
    $('#xscore').html(xScore)
    return xScore
  } else if (turn === 'Oliver') {
    oScore += 1
    $('#oscore').html(oScore)
    return oScore
  }
}

const noWin = function () {
  moveCounter += 1
  console.log('Move count is ' + moveCounter)
  // game over process if all boxes are full:
  if (moveCounter >= 9) {
    $('#game-prompt').html('Cat\'s Game! Game Over.')
    gameApi.onGameOver()
    // if its x's turn:
  } else if (turn === 'Xavier') {
    turn = 'Oliver'
    console.log('Turn:' + turn)
    $('#game-prompt').html('It is ' + turn + '\'s turn!')
    // if it's o's turn:
  } else if (turn === 'Oliver') {
    turn = 'Xavier'
    console.log('Turn:' + turn)
    $('#game-prompt').html('It is ' + turn + '\'s turn!')
  }
  console.log('return' + turn)
  return turn
}

// function to check all of the options for a win
// const checkForWin = function () {
//   for (let i = 0; i < boxes.length; i++) {
//     switch (true) {
//       case ((i === 0 || i === 3 || i === 6) && (boxes[i].value !== 0) && (boxes[i].value === boxes[i + 1].value) && (boxes[i].value === boxes[i + 2].value)):
//         winFunc()
//         break
//       case ((i === 0 || i === 1 || i === 2) && (boxes[i].value !== 0 && boxes[i].value === boxes[i + 3].value) && (boxes[i].value === boxes[i + 6].value)):
//         winFunc()
//         break
//       case (i === 0 && boxes[0].value !== 0 && boxes[0].value === boxes[4].value && boxes[0].value === boxes[8].value):
//         winFunc()
//         break
//       case (i === 2 && boxes[2].value !== 0 && boxes[2].value === boxes[4].value && boxes[2].value === boxes[6].value):
//         winFunc()
//         break
//       default:
//         noWin()
//         break
//     }
//   }
// }

const checkForWin = function () {
  // checks for horizontal win:
  if (boxes[0].value !== 0 && boxes[0].value === boxes[1].value && boxes[0].value === boxes[2].value) {
    winFunc()
  } else if (boxes[3].value !== 0 && boxes[3].value === boxes[4].value && boxes[3].value === boxes[5].value) {
    winFunc()
  } else if (boxes[6].value !== 0 && boxes[6].value === boxes[7].value && boxes[6].value === boxes[8].value) {
    winFunc()
    // checks for vertical win:
  } else if (boxes[0].value !== 0 && boxes[0].value === boxes[3].value && boxes[0].value === boxes[6].value) {
    winFunc()
  } else if (boxes[1].value !== 0 && boxes[1].value === boxes[4].value && boxes[1].value === boxes[7].value) {
    winFunc()
  } else if (boxes[2].value !== 0 && boxes[2].value === boxes[5].value && boxes[2].value === boxes[8].value) {
    winFunc()
    // checks for diagonal win top left to bottom right:
  } else if (boxes[0].value !== 0 && boxes[0].value === boxes[4].value && boxes[0].value === boxes[8].value) {
    winFunc()
    // checks for diagonal win bottom left to top right:
  } else if (boxes[6].value !== 0 && boxes[6].value === boxes[4].value && boxes[6].value === boxes[2].value) {
    winFunc()
    // what to do if no win on this turn
  } else {
    noWin()
  }
}

// this prompts the win message

// function to reset the game when the button is clicked
const resetGame = function() {
  console.log('game reset')
  $('.game.box').html('')
  boxes[0].value = 0
  boxes[1].value = 0
  boxes[2].value = 0
  boxes[3].value = 0
  boxes[4].value = 0
  boxes[5].value = 0
  boxes[6].value = 0
  boxes[7].value = 0
  boxes[8].value = 0
  moveCounter = 0
  console.log('The boxes are ' + boxes)
  turn = 'Xavier'
  $('.game.box').on('click', function () {
    onPlaceMarker(this.id)
  })
  return boxes
}
// A different attempt at placing markers:
// const showImage = function (id) {
// if (boxes[id].value === 'X') {
//  document.getElementById(id).innerHTML = "<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG-HD.png' alt='kitten' style='width:80px; height:80px'>"
// } if (boxes[id].value === 'O') {
//  document.getElementById(id).innerHTML = "<http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG.png' style='width:80px; height:80px'>"
// }
// }

// const resetBoard = function () {
//  boxes.value = 0
// })

module.exports = {
  turn,
  onPlaceMarker,
  checkForWin,
  winFunc,
  boardEvents,
  resetGame
}
