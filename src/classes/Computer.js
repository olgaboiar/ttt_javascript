const Player = require('./Player.js')
const Board = require('./Board.js')
var index, bestMove
class Computer extends Player {
  getMove (board, opponentSymbol) {
    // return this.randomMove(board)
    this.setOpponent(opponentSymbol)
    this.calculateMoves(board, opponentSymbol)
    return bestMove
  }

  setOpponent (symbol) {
    this.opponent = symbol
  }

  randomMove (board) {
    let cell = null
    while (board.spots[cell] !== '') {
      cell = Math.floor(Math.random() * board.spots.length)
    }
    return cell
  }

  moveScore (board, lastMove, depth) {
    if (this.gameRules.win(board) && lastMove === this.symbol) {
      return 10 - depth
    }
    if (this.gameRules.win(board) && lastMove !== this.symbol) {
      return depth - 10
    }
    if (this.gameRules.tie(board)) {
      return 0
    }
  }

  switchMarker (marker) {
    if (marker === this.opponent) {
      return this.symbol
    } else {
      return this.opponent
    }
  }

  getBestMove (scores, moves, currentMove) {
    if (currentMove === this.symbol) {
      index = scores.indexOf(Math.max(...scores))
    } else {
      index = scores.indexOf(Math.min(...scores))
    }
    bestMove = moves[index]
    return bestMove
  }

  calculateMoves (board, lastMove, depth = 0) {
    let self = this
    let moves = []
    let scores = []
    let currentMove = null
    if (this.gameRules.gameOver(board)) {
      return this.moveScore(board, lastMove, depth)
    }
    board.availableSpots().forEach(function (spot) {
      let potentialBoard = new Board()
      potentialBoard.spots = board.spots
      let initialValue = potentialBoard.spots[spot]
      currentMove = self.switchMarker(lastMove)
      potentialBoard.setMove(spot, currentMove)
      scores.push(self.calculateMoves(potentialBoard, currentMove, depth + 1))
      moves.push(spot)
      potentialBoard.setMove(spot, initialValue)
    })
    this.getBestMove(scores, moves, currentMove)
    return scores[index]
  }
}

module.exports = Computer
