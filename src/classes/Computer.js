const Player = require('./Player.js')

class Computer extends Player {
  randomMove (board) {
    let cell = null
    while (board.spots[cell] !== '') {
      cell = Math.floor(Math.random() * board.spots.length)
    }
    return cell
  }
}

module.exports = Computer
