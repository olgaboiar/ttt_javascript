const EasyComputer = require('./EasyComputer.js')
const MediumComputer = require('./MediumComputer.js')
const HardComputer = require('./HardComputer.js')
const Human = require('./Human.js')
var human, computer
class Game {
  constructor (gameRules, board, ui, difficultyLevel) {
    this.currentPlayer = null
    this.nextPlayer = null
    this.gameRules = gameRules
    this.board = board
    this.ui = ui
    this.difficultyLevel = difficultyLevel
  }

  printBoard () {
    this.ui.printBoard()
  }

  createPlayers (humanSymbol, computerSymbol, gameRules, difficultyLevel, firstToMoveComp) {
    human = new Human(this.ui, humanSymbol)
    let difficulty = difficultyLevel.replace(/\b\w/g, l => l.toUpperCase()) + 'Computer'
    computer = new global[difficulty](this.ui, computerSymbol, gameRules)
    if (!firstToMoveComp) {
      this.currentPlayer = human
      this.nextPlayer = computer
    } else {
      this.currentPlayer = computer
      this.nextPlayer = human
    }
  }

  humanTurn (symbol) {
    if (symbol === human.symbol) {
      return true
    } else {
      return false
    }
  }

  computerMove (gameBoard, computer, human, gameRules) {
    let spot = computer.getMove(gameBoard, human.symbol)
    this.move(computer, gameBoard, spot, gameRules)
  }

  move (player, board, spot, gameRules) {
    board.setMove(spot, player.symbol)
    this.ui.showMove(spot, player)
    if (gameRules.gameOver(board) && gameRules.win(board)) this.ui.showWinner(player)
  }

  play (board, currentPlayer, nextPlayer) {
    if (!this.gameRules.gameOver(board) && !this.humanTurn(currentPlayer.symbol)) {
      this.computerMove(board, currentPlayer, nextPlayer, this.gameRules)
      nextPlayer = [currentPlayer, currentPlayer = nextPlayer][0]
    }
    this.ui.play(board, currentPlayer, nextPlayer, this.humanTurn(currentPlayer.symbol))
  }
}

module.exports = Game
