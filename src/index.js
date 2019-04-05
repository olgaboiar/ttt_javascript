import Board from './classes/Board'
import Game from './classes/Game'
import GameRules from './classes/GameRules'
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
  var elems = document.querySelectorAll('select')
  var instances = M.FormSelect.init(elems, {})
  document.getElementById('newgame').addEventListener('click', () => {
    var optionsForHuman = document.getElementById('human-symbol')
    var humanSymbol = optionsForHuman.options[optionsForHuman.selectedIndex].value
    var optionsForComputer = document.getElementById('computer-symbol')
    var computerSymbol = optionsForComputer.options[optionsForComputer.selectedIndex].value
    var optionsForDifficulty = document.getElementById('difficulty-level')
    for (var i = 0, length = optionsForDifficulty.length; i < length; i++) {
      if (optionsForDifficulty[i].checked) {
        var difficultyLevel = optionsForDifficulty[i].value
      }
    }
    var firstToMoveComp = document.getElementById('first-move').checked
    console.log(difficultyLevel)
    console.log(firstToMoveComp)
    console.log(humanSymbol)
    if (humanSymbol === '' || computerSymbol === '') {
      M.toast({html: 'Choose symbols for players!!!', classes: 'teal darken-1'})
    } else if (humanSymbol === computerSymbol) {
      M.toast({html: 'Players sumbols must be different', classes: 'teal darken-1'})
    } else {
      NewGame(humanSymbol, computerSymbol, difficultyLevel, firstToMoveComp)
    }
  })
})
