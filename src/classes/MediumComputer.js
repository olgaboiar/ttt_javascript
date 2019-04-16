const Computer = require('./Computer.js')

class MediumComputer extends Computer {
  getMove (board) {
    return this.centerMove(board)
  }

  centerMove (board) {
    if (board.spots[4] === '') {
      return 4
    }
    return this.randomMove(board)
  }
}

module.exports = MediumComputer
global.MediumComputer = MediumComputer
