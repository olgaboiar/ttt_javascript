const Computer = require('./Computer.js')
const Human = require('./Human.js')

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

  createPlayers (humanSymbol, computerSymbol, gameRules, difficultyLevel, firstToMove) {
    if (firstToMove === 'human') {
      this.currentPlayer = new Human(this.ui, humanSymbol)
      this.nextPlayer = new Computer(this.ui, computerSymbol, gameRules, difficultyLevel)
    } else {
      this.currentPlayer = new Computer(this.ui, computerSymbol, gameRules, difficultyLevel)
      this.nextPlayer = new Human(this.ui, humanSymbol)
    }
  }

  switch (currentPlayer, nextPlayer) {
    [currentPlayer, nextPlayer] = [nextPlayer, currentPlayer]
  }

  play (board, currentPlayer, nextPlayer) {
    this.ui.play(board, currentPlayer, nextPlayer)
  }
}

module.exports = Game
