'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const turn = require('./game/events.js')
const boxes = require('./game/events.js')
const boardEvents = require('./game/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// Game identifies it is X's turn

// Player-x clicks a box to place marker

// Marker appears in that space

// Game checks for win

const checkForWin = function () {
  checkHoriz()
  checkVert()
  checkDiag()
}

const checkHoriz = function () {
  for (i = 0; i < 7; i += 3) {
    if (boxes[i].value !== 0 && boxes[i].value === boxes[i+1].value && boxes[i].value === boxes[i+2].value) {
      console.log(turn + ' wins!')
    }
  }
}

const checkVert = function () {
  for (i = 0; i < 3; i++) {
  if (boxes[i].value !== 0 && boxes[i].value === boxes[i+3].value && boxes[i].value === boxes[i+6].value) {
      console.log(turn + ' wins!')
    }
    else {
    }
}
}

const checkDiag = function () {
  if (i=0 && boxes[0].value !== 0 && boxes[0].value === boxes[4].value && boxes[0].value === boxes[8].value) {
    console.log(turn + ' wins!')
  } else if (i = 2 && boxes[0].value !== 0 && boxes[2].value === boxes[4].value && boxes[2] === boxes[6].value) {
    console.log(turn + ' wins!')
  }
}

$(() => {
  $(function () {
    $('#grid-container').hide()
    $('.start').hide()
    $('#sign-in-button').hide()
  })
  $('#create-button').on('click', function () {
    $('#sign-in-button').show()
  })
  $('#sign-in-button').on('click', function () {
    $('.start').show()
  })
  $('.start').on('click', function () {
    $('#grid-container').show()
    $('#game-prompt').html('Xavier always starts!')
  })
  $('.game.box').on('click', function () {
    boardEvents.onPlaceMarker(this.id)
  })
})
//

// TODO Message that it is now O's turn

// Player-o clicks a box to place marker

// Marker appears in that space

// Game checks for win or game over

// TODO Repeat until win logic is met OR until all spaces are full

// TODO Message " __ wins! " or "Game over. Play again?"

// TODO If win, add 1 point to the game winner's score

// TODO Players can search for an existing game to continue

// TODO Game stored in incomplete or complete stage

module.exports = {
  turn,
  boxes,
  checkForWin,
  checkHoriz,
  checkVert,
  checkDiag,
  boardEvents
}
