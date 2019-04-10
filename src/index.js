import Board from './classes/Board'
import Game from './classes/Game'
import GameRules from './classes/GameRules'
import Menu from './classes/Menu'
import Web from './classes/Web'
import UI from './classes/UI'

function NewGame (humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp) {
  let gameRules = new GameRules()
  let gameBoard = new Board()
  let web = new Web(humanSymbol, computerSymbol)
  let ui = new UI(gameRules, web)
  let game = new Game(gameRules, gameBoard, ui, difficultyLevel)
  game.createPlayers(humanSymbol, computerSymbol, gameRules, difficultyLevel, firstToMoveComp)
  game.printBoard()
  game.play(gameBoard, game.currentPlayer, game.nextPlayer)
}

document.addEventListener('DOMContentLoaded', event => {
  let menu = new Menu()
  menu.initSelection()
  document.getElementById('newgame').addEventListener('click', () => {
    var humanSymbol = menu.getHumanSymbol()
    var computerSymbol = menu.getComputerSymbol()
    var difficultyLevel = menu.getDifficultyLevel()
    var firstToMoveComp = document.getElementById('first-move').checked
    if (humanSymbol === '' || computerSymbol === '') {
      menu.errorMessage('Choose symbols for players!!!')
    } else if (humanSymbol === computerSymbol) {
      menu.errorMessage('Players sumbols must be different')
    } else {
      NewGame(humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp)
    }
  })
})
