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
let moveCounter = 0

const onPlaceMarker = function (id) {
    if (turn === 'X' && boxes[id].value === 0) {
    boxes[id].value = 'X'
    console.log(boxes[id].value)
    document.getElementById(id).innerHTML = "<img src='http://www.pngall.com/wp-content/uploads/2016/05/Kitten-PNG-HD.png' alt='kitten' style='width:80px; height:80px'>"
    turn = 'O'
    moveCounter += 1
    console.log('moves:' + moveCounter)
      if (moveCounter >= 9) {
      $('#game-prompt').html('Cat\'s Game! Game Over.')
      }  else {$('#game-prompt').html('It is Oliver\'s turn!')
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
    }  else {$('#game-prompt').html('It is Xavier\'s turn!')}
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
