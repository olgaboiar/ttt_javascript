import Board from './classes/Board'
import Game from './classes/Game'
import GameRules from './classes/GameRules'
import Web from './classes/Web'
import UI from './classes/UI'

function NewGame (humanSymbol, computerSymbol) {
  let gameRules = new GameRules()
  let gameBoard = new Board()
  let web = new Web()
  let ui = new UI(gameRules, web)
  let game = new Game(gameRules, gameBoard, ui)
  game.createPlayers(humanSymbol, computerSymbol, gameRules)
  game.printBoard()
  game.setCurrentPlayer(game.player1, game.player2)
  game.play(gameBoard, game.currentPlayer, game.nextPlayer)
}

document.addEventListener('DOMContentLoaded', event => {
//   NewGame()
  document.getElementById('newgame').addEventListener('click', () => {
    var symbolsForHuman = document.getElementById('human-symbol')
    var humanSymbol = symbolsForHuman.options[symbolsForHuman.selectedIndex].value
    var symbolsForComputer = document.getElementById('computer-symbol')
    var computerSymbol = symbolsForComputer.options[symbolsForComputer.selectedIndex].value
    NewGame(humanSymbol, computerSymbol)
  })
})
