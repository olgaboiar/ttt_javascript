import Board from './Board'
import Game from './Game'
var humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp

class TicTacToe {
  constructor (menu) {
    this.menu = menu
  }

  showMenu () {
    this.menu.showMenu()
  }

  initiateGame (gameRules, ui, humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp) {
    let gameBoard = new Board()
    ui.setSymbols(humanSymbol, computerSymbol)
    let game = new Game(gameRules, gameBoard, ui, difficultyLevel)
    game.createPlayers(humanSymbol, computerSymbol, gameRules, difficultyLevel, firstToMoveComp)
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
      this.initiateGame(gameRules, ui, humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp)
    }
  }
}

export default TicTacToe
