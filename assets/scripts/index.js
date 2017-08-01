'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// Game identifies it is X's turn
let turn = 'x'

if (turn = 'x') {
  console.log("It is X\'s turn!")
} else {
  console.log("It is O\'s turn!")
}

// Player-x clicks a box to place marker
let boxes = [
  {position: 0, value: null},
  {position: 1, value: null},
  {position: 2, value: null},
  {position: 3, value: null},
  {position: 4, value: null},
  {position: 5, value: null},
  {position: 6, value: null},
  {position: 7, value: null},
  {position: 8, value: null}
]

boxes[1].value = 'x'
boxes[4].value = 'x'
boxes[7].value = 'x'

// Marker appears in that space

// Game checks for win

const checkForWin = function () {
  checkHoriz
  checkVert
  checkDiag
}

const checkHoriz = function (array) {
  for (i = 0; i < 7; i += 3) {
    if (boxes[i].value === boxes[i+1].value && boxes[i].value === boxes[i+2].value) {
      console.log(turn + ' wins!')
    }
  }
}

const checkVert3 = function () {
  for (i = 0; i < 3; i++) {
  if (boxes[i].value !== null && boxes[i].value === boxes[i+3].value && boxes[i].value === boxes[i+6].value) {
      console.log(turn + ' wins!')
    }
    else {
    }
}
}

const checkDiag = function () {
  if (i=0 && boxes[0].value === boxes[4].value && boxes[0].value === boxes[8].value) {
    console.log(turn + ' wins!')
  } else if (i = 2 && boxes[2].value === boxes[4].value && boxes[2] === boxes[6].value) {
    console.log(turn + ' wins!')
  }
}

const boardEvents = require('./games/events.js')

$(document).ready(function () {
  $('box').click(boardEvents.onPlaceMarker(this.id))
})

// Message that it is now O's turn

// Player-o clicks a box to place marker

// Marker appears in that space

// Game checks for win or game over

// Repeat until win logic is met OR until all spaces are full

// Message " __ wins! " or "Game over. Play again?"

// If win, add 1 point to the game winner's score

// Players can search for an existing game to continue

// Game stored in incomplete or complete stage

module.exports = {
  turn,
  boxes,
  checkForWin,
  boardEvents,
  targetId
}
