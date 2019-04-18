const Player = require('./Player.js')

class Human extends Player {
  move (spot, board) {
    board.setMove(spot, this.symbol)
  }
}

module.exports = Human
