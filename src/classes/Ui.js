class UI {
  constructor (gameRules, webUi) {
    this.gameRules = gameRules
    this.webUi = webUi
  }

  printBoard () {
    this.webUi.printBoard()
  }

  play (gameBoard, currentPlayer, nextPlayer, turn) {
    this.webUi.play(gameBoard, currentPlayer, nextPlayer, this.gameRules, turn)
  }

  showMove (cell, player) {
    this.webUi.showMove(cell, player)
  }

  showWinner (player) {
    this.webUi.showWinner(player)
  }
}

module.exports = UI
