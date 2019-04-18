import Board from './Board'
import Game from './Game'
import Settings from './Settings'
var humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp

class TicTacToe {
  constructor (menu) {
    this.menu = menu
  }

  showMenu () {
    this.menu.showMenu()
  }

  initiateGame (gameRules, ui, gameSettings) {
    let gameBoard = new Board()
    ui.setSymbols(gameSettings.humanSymbol, gameSettings.computerSymbol)
    let game = new Game(gameRules, gameBoard, ui, gameSettings.difficultyLevel)
    game.createPlayers(gameSettings.humanSymbol, gameSettings.computerSymbol, gameRules, gameSettings.difficultyLevel, gameSettings.firstToMoveComp)
    game.printBoard()
    game.play(gameBoard, game.currentPlayer, game.nextPlayer)
  }

  setUpGame (gameRules, ui) {
    humanSymbol = this.menu.getHumanSymbol()
    computerSymbol = this.menu.getComputerSymbol()
    difficultyLevel = this.menu.getDifficultyLevel()
    firstToMoveComp = this.menu.getFirstToMoveComp()
    if (humanSymbol === '' || computerSymbol === '') {
      this.menu.errorMessage('Choose symbols for players!!!')
    } else if (humanSymbol === computerSymbol) {
      this.menu.errorMessage('Players sumbols must be different')
    } else {
      let gameSettings = new Settings(humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp)
      this.initiateGame(gameRules, ui, gameSettings)
    }
  }
}

export default TicTacToe
