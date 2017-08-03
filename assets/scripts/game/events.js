'use strict'

const id = require('../index.js')
const checkWin = require('./win.js')

// TODO should i be creating an object "game"? need to track # of moves to register game over

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

module.exports = {
  id,
  checkWin
}
