class UI {
  constructor (gameRules, webUi) {
    this.gameRules = gameRules
    this.webUi = webUi
  }

  printBoard () {
    this.webUi.printBoard()
  }

  play (gameBoard, currentPlayer, nextPlayer) {
    this.webUi.play(gameBoard, currentPlayer, nextPlayer, this.gameRules)
  }
}

module.exports = UI
