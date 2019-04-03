import Board from './classes/Board'
import Game from './classes/Game'
import GameRules from './classes/GameRules'
import Web from './classes/Web'
import UI from './classes/UI'

function NewGame (humanSymbol, computerSymbol, difficultyLevel, firstToMove) {
  let gameRules = new GameRules()
  let gameBoard = new Board()
  let web = new Web(humanSymbol, computerSymbol)
  let ui = new UI(gameRules, web)
  let game = new Game(gameRules, gameBoard, ui, difficultyLevel)
  game.createPlayers(humanSymbol, computerSymbol, gameRules, difficultyLevel, firstToMove)
  game.printBoard()
  game.play(gameBoard, game.currentPlayer, game.nextPlayer)
}

document.addEventListener('DOMContentLoaded', event => {
//   NewGame()
  document.getElementById('newgame').addEventListener('click', () => {
    var optionsForHuman = document.getElementById('human-symbol')
    var humanSymbol = optionsForHuman.options[optionsForHuman.selectedIndex].value
    var optionsForComputer = document.getElementById('computer-symbol')
    var computerSymbol = optionsForComputer.options[optionsForComputer.selectedIndex].value
    var optionsForDifficulty = document.getElementById('difficulty-level')
    var difficultyLevel = optionsForDifficulty.options[optionsForDifficulty.selectedIndex].value
    var optionsForMove = document.getElementById('first-move')
    var firstToMove = optionsForMove.options[optionsForMove.selectedIndex].value
    NewGame(humanSymbol, computerSymbol, difficultyLevel, firstToMove)
  })
})
