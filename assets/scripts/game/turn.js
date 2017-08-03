'use strict'

const checkWin = require('./win.js')

let turn = 'X'

if (turn === 'X') {
  console.log("It is X's turn!")
} else {
  console.log("It is O's turn!")
}

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
let moveCounter = 0

const onPlaceMarker = function (id) {
  if (turn === 'X' && boxes[id].value === 0) {
    boxes[id].value = 'X'
    console.log(boxes[id].value)
    console.log(boxes)
    // $('#\\id').html('<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG-HD.png' alt='kitten' style='width:80px; height:80px'>')
    document.getElementById(id).innerHTML = "<img src='/assets/images/kitten-xavier.png' alt='kitten' style='width:80px; height:80px'>"
    turn = 'O'
    moveCounter += 1
    console.log('moves:' + moveCounter)
    if (moveCounter >= 9) {
      $('#game-prompt').html('Cat\'s Game! Game Over.')
    } else {
      $('#game-prompt').html('It is Oliver\'s turn!')
    }
  } else if (turn === 'O' && boxes[id].value === 0) {
    boxes[id].value = 'O'
    console.log(boxes[id].value)
    document.getElementById(id).innerHTML = "<img src='/assets/images/kitten-oliver.png' style='width:80px; height:80px'>"
    turn = 'X'
    moveCounter += 1
    console.log('moves:' + moveCounter)
    if (moveCounter >= 9) {
      $('#game-prompt').html('Cat\'s Game! Game Over.')
    } else {
      $('#game-prompt').html('It is Xavier\'s turn!')
    }
  }
}

checkWin.checkHoriz
checkWin.checkVert
checkWin.checkDiag

module.exports = {
  turn,
  onPlaceMarker
}
