class UI {
  constructor (gameRules, webUi) {
    this.gameRules = gameRules
    this.webUi = webUi
  }

  printBoard () {
    this.webUi.printBoard()
  }

  setSymbols (humanSymbol, computerSymbol) {
    this.webUi.setSymbols(humanSymbol, computerSymbol)
  }

  showMenu () {
    this.webUi.initMenuSelection()
  }

  getHumanSymbol () {
    return this.webUi.getHumanSymbol()
  }

  getComputerSymbol () {
    return this.webUi.getComputerSymbol()
  }

  getDifficultyLevel () {
    return this.webUi.getDifficultyLevel()
  }

  getFirstToMoveComp () {
    return this.webUi.getFirstToMoveComp()
  }

  errorMessage (message) {
    this.webUi.errorMessage(message)
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
