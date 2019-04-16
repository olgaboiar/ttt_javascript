class Menu {
  constructor (ui) {
    this.ui = ui
  }

  showMenu () {
    this.ui.showMenu()
  }

  getHumanSymbol () {
    return this.ui.getHumanSymbol()
  }

  getComputerSymbol () {
    return this.ui.getComputerSymbol()
  }

  getDifficultyLevel () {
    return this.ui.getDifficultyLevel()
  }

  getFirstToMoveComp () {
    return this.ui.getFirstToMoveComp()
  }

  errorMessage (message) {
    this.ui.errorMessage(message)
  }

  initiateNewGame (tictactoe) {
    var humanSymbol = this.getHumanSymbol()
    var computerSymbol = this.getComputerSymbol()
    var difficultyLevel = this.getDifficultyLevel()
    var firstToMoveComp = this.getFirstToMoveComp()
    if (humanSymbol === '' || computerSymbol === '') {
      this.errorMessage('Choose symbols for players!!!')
    } else if (humanSymbol === computerSymbol) {
      this.errorMessage('Players sumbols must be different')
    } else {
      tictactoe.initiateGame(humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp)
    }
  }
}

module.exports = Menu
