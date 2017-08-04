'use strict'

const getTurn = require('./turn.js')
const getBoxes = require('./turn.js')

const checkHoriz = function () {
  for (let i = 0; i < 7; i += 3) {
    if (getBoxes.boxes[i].value !== 0 && getBoxes.boxes[i].value === getBoxes.boxes[i + 1].value && getBoxes.boxes[i].value === getBoxes.boxes[i + 2].value) {
      $('#game-prompt').html(getTurn.turn + ' wins! Game Over.')
    }
  }
}
const checkVert = function () {
  for (let i = 0; i < 3; i++) {
    if (getBoxes.boxes[i].value !== 0 && getBoxes.boxes[i].value === getBoxes.boxes[i + 3].value && getBoxes.boxes[i].value === getBoxes.boxes[i + 6].value) {
      console.log(getTurn.turn + ' wins!')
    } else {
    }
  }
}
const checkDiag = function () {
  if (getBoxes.boxes[0].value !== 0 && getBoxes.boxes[0].value === getBoxes.boxes[4].value && getBoxes.boxes[0].value === getBoxes.boxes[8].value) {
    console.log(getTurn.turn + ' wins!')
  } else if (getBoxes.boxes[0].value !== 0 && getBoxes.boxes[2].value === getBoxes.boxes[4].value && getBoxes.boxes[2] === getBoxes.boxes[6].value) {
    console.log(getTurn.turn + ' wins!')
  }
}

module.exports = {
  checkHoriz,
  checkVert,
  checkDiag
}
