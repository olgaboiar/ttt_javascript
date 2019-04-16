import GameRules from './classes/GameRules'
import Menu from './classes/Menu'
import TicTacToe from './classes/TicTacToe'
import UI from './classes/UI'
import Web from './classes/Web'

document.addEventListener('DOMContentLoaded', event => {
  let gameRules = new GameRules()
  let web = new Web()
  let ui = new UI(gameRules, web)
  let menu = new Menu(ui)
  let tictactoe = new TicTacToe(menu)
  tictactoe.showMenu()
  document.getElementById('newgame').addEventListener('click', () => {
    tictactoe.setUpGame(gameRules, ui)
  })
})
