'use strict'

const id = require('../index.js')
const checkWin = require('../index.js')

// TODO should i be creating an object "game"? need to track # of moves to register game over

let turn = 'X'

if (turn === 'X') {
  console.log("It is X's turn!")
} else {
  console.log("It is O's turn!")
}

const boxes = [
  {position: 0, value: 0},
  {position: 1, value: 0},
  {position: 2, value: 0},
  {position: 3, value: 0},
  {position: 4, value: 0},
  {position: 5, value: 0},
  {position: 6, value: 0},
  {position: 7, value: 0},
  {position: 8, value: 0}
]

const onPlaceMarker = function (id) {
  if (turn === 'X' && boxes[id].value === 0) {
    boxes[id].value = 'X'
    console.log(boxes[id].value)
    document.getElementById(id).innerHTML = "<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG-HD.png' alt='kitten' style='width:80px; height:80px'>"
    turn = 'O'
    $('#game-prompt').html('It is Oliver\'s turn!')
  } else if (turn === 'O' && boxes[id].value === 0) {
    boxes[id].value = 'O'
    console.log(boxes[id].value)
    document.getElementById(id).innerHTML = "<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG.png' style='width:80px; height:80px'>"
    turn = 'X'
    $('#game-prompt').html('It is Xavier\'s turn!')
  }
}

// TODO checkWin.checkHoriz()
// TODO checkWin.checkVert()
// TODO checkWin.checkDiag()

module.exports = {
  onPlaceMarker,
  turn,
  id
}
