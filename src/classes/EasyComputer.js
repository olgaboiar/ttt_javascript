const Computer = require('./Computer.js')

class EasyComputer extends Computer {
  getMove (board) {
    return this.randomMove(board)
  }
}

module.exports = EasyComputer
global.EasyComputer = EasyComputer
