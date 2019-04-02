const Computer = require('./Computer.js')
const Human = require('./Human.js')

class Game {
  constructor (gameRules, board, ui) {
    this.currentPlayer = null
    this.nextPlayer = null
    this.player1 = null
    this.player2 = null
    this.gameRules = gameRules
    this.board = board
    this.ui = ui
  }

  printBoard () {
    this.ui.printBoard()
  }

  setCurrentPlayer (player1, player2) {
    this.currentPlayer = player1
    this.nextPlayer = player2
  }

  switch (currentPlayer, nextPlayer) {
    [currentPlayer, nextPlayer] = [nextPlayer, currentPlayer]
  }

  createPlayers (humanSymbol, computerSymbol, gameRules) {
    this.player1 = new Human(this.ui, humanSymbol)
    this.player2 = new Computer(this.ui, computerSymbol, gameRules)
  }

  play (board, currentPlayer, nextPlayer) {
    this.ui.play(board, currentPlayer, nextPlayer)
  }
}

module.exports = Game
