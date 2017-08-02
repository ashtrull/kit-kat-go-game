'use strict'

const id = require('../index.js')
const checkWin = require('../index.js')

// TODO should i be creating an object "game"? need to track # of moves to register game over

let turn = 'X'
// const Game = function (gameId, username, numberOfTurns, boardArray, scoreArray)
// this.gameId = gameId
// this.username = username
// this.numberOfTurns = numberOfTurns
// this.boardArray = boardArray
// this.scoreArray = scoreArray

// const game = {
//   gameId: 0,
//   username: '',
//   numberOfTurns: 0,
//   boardArray: [
//     {position: 0, value: 0},
//     {position: 1, value: 0},
//     {position: 2, value: 0},
//     {position: 3, value: 0},
//     {position: 4, value: 0},
//     {position: 5, value: 0},
//     {position: 6, value: 0},
//     {position: 7, value: 0},
//     {position: 8, value: 0}
//   ],
//   scoreArray: [
//     {x: 0},
//     {o: 0}
//  ]
// }

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
    document.getElementById(id).innerHTML = "<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG-HD.png' alt='kitten' style='width:80px; height:80px'>"
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
    document.getElementById(id).innerHTML = "<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG.png' style='width:80px; height:80px'>"
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

const checkHoriz = function () {
  for (let i = 0; i < 7; i += 3) {
    if (boxes[i].value !== 0 && boxes[i].value === boxes[i + 1].value && boxes[i].value === boxes[i + 2].value) {
      $('#game-prompt').html(turn + ' wins! Game Over.')
    }
  }
}
const checkVert = function () {
  for (let i = 0; i < 3; i++) {
    if (boxes[i].value !== 0 && boxes[i].value === boxes[i + 3].value && boxes[i].value === boxes[i + 6].value) {
      console.log(turn + ' wins!')
    } else {
    }
  }
}
const checkDiag = function () {
  if (boxes[0].value !== 0 && boxes[0].value === boxes[4].value && boxes[0].value === boxes[8].value) {
    console.log(turn + ' wins!')
  } else if (boxes[0].value !== 0 && boxes[2].value === boxes[4].value && boxes[2] === boxes[6].value) {
    console.log(turn + ' wins!')
  }
}

checkHoriz()
checkVert()
checkDiag()

module.exports = {
  onPlaceMarker,
  turn,
  id,
  checkHoriz,
  checkVert,
  checkDiag,
  checkWin
}
