import Board from './Board'
import Game from './Game'
import GameRules from './GameRules'
import Web from './Web'
import UI from './UI'
var humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp

class TicTacToe {
  constructor (menu) {
    this.menu = menu
  }

  showMenu () {
    this.menu.initSelection()
  }

  initiateGame (humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp) {
    let gameRules = new GameRules()
    let gameBoard = new Board()
    let web = new Web(humanSymbol, computerSymbol)
    let ui = new UI(gameRules, web)
    let game = new Game(gameRules, gameBoard, ui, difficultyLevel)
    game.createPlayers(humanSymbol, computerSymbol, gameRules, difficultyLevel, firstToMoveComp)
    game.printBoard()
    game.play(gameBoard, game.currentPlayer, game.nextPlayer)
  }

  setUpGame () {
    humanSymbol = this.menu.getHumanSymbol()
    computerSymbol = this.menu.getComputerSymbol()
    difficultyLevel = this.menu.getDifficultyLevel()
    firstToMoveComp = this.menu.getFirstToMoveComp()
    if (humanSymbol === '' || computerSymbol === '') {
      this.menu.errorMessage('Choose symbols for players!!!')
    } else if (humanSymbol === computerSymbol) {
      this.menu.errorMessage('Players sumbols must be different')
    } else {
      this.initiateGame(humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp)
    }
  }
}

export default TicTacToe
