'use strict'

const boxes = require('../index.js')
const turn = require('../index.js')
const id = require('../index.js')

const onPlaceMarker = function (id) {
  if (turn = 'x' && boxes[id].position === null) {
    boxes[id].value = "x"
    document.getElementById(id).innerHTML = "<img src='.assets/images/kitten1.png' width='60px'>"
  } else if (turn = "o" && boxes[id].position === null) {
    boxes[id].value = "x"
    document.getElementById(id).innerHTML = "<img  src='.assets/images/kitten2.png' width='60px'>"
  } else {
    console.log('Please select an empty space')
  }
}

module.exports = {
  onPlaceMarker,
  turn
}
