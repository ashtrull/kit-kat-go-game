'use strict'

const app = require('../app.js')

const createGameSuccess = (data) => {
  app.game = data.game
  app.game.id = data.game.id
  console.log(data)
  console.log('Succeded')
}

const createGameFail = (error) => {
  console.error(error)
}

const updateGameSuccess = (data) => {
  console.log(data)
  console.log('Updated game')
}

const updateGameFail = (error) => {
  console.error(error)
}

const success = (data) => {
  console.log(data)
}

const fail = (error) => {
  console.error(error)
}

module.exports = {
  fail,
  success,
  createGameSuccess,
  createGameFail,
  updateGameSuccess,
  updateGameFail
}
