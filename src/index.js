import Menu from './classes/Menu'
import TicTacToe from './classes/TicTacToe'

document.addEventListener('DOMContentLoaded', event => {
  let menu = new Menu()
  let tictactoe = new TicTacToe(menu)
  tictactoe.showMenu()
  document.getElementById('newgame').addEventListener('click', () => {
    tictactoe.setUpGame()
  })
})
