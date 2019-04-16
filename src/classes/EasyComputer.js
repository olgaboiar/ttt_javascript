const Computer = require('./Computer.js')

class EasyComputer extends Computer {
  getMove (board, opponentSymbol) {
    return this.randomMove(board)
  }
}

module.exports = EasyComputer
