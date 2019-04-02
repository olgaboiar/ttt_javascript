var jsdom = require('jsdom')
const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="board"></div></body></html>`)
// var document
class MockWeb {
  constructor () {
    // global.document = jsdom('<!doctype html><html><body><div id="board"></div></body></html>')
    this.board = null
    this.htmlCells = null
  }

  setBoard () {
    this.board = dom.window.document.getElementById('board')
  }

  printBoard () {
    this.setBoard()
    this.board.innerHTML = '<div class="board_cell cell-0"></div>' +
                            '<div class="board_cell cell-1"></div>' +
                            '<div class="board_cell cell-2"></div>' +
                            '<div class="board_cell cell-3"></div>' +
                            '<div class="board_cell cell-4"></div>' +
                            '<div class="board_cell cell-5"></div>' +
                            '<div class="board_cell cell-6"></div>' +
                            '<div class="board_cell cell-7"></div>' +
                            '<div class="board_cell cell-8"></div>'
    this.htmlCells = [...this.board.children]
  }

  play (gameBoard, currentPlayer, nextPlayer, gameRules) {
    gameBoard.spots.forEach((cell, index) => {
      this.htmlCells[index].addEventListener('click', () => {
        if (this.hasClass(this.htmlCells[index], currentPlayer.symbol) || this.hasClass(this.htmlCells[index], nextPlayer.symbol) || gameRules.gameOver(gameBoard)) return false
        gameBoard.setMove(index, currentPlayer.symbol)
        this.showMove(this.htmlCells[index], currentPlayer)
        if (gameRules.gameOver(gameBoard)) {
          this.showWinner(currentPlayer)
        } else {
          let spot = nextPlayer.getMove(gameBoard, currentPlayer.symbol)
          gameBoard.setMove(spot, nextPlayer.symbol)
          this.showMove(this.htmlCells[spot], nextPlayer)
          if (gameRules.gameOver(gameBoard)) this.showWinner(nextPlayer)
        }
      }, false)
    })
  }

  showMove (cell, player) {
    this.addClass(cell, player.symbol)
  }

  showWinner (player) {
    var elements = document.getElementsByClassName(player.symbol)
    for (let item of elements) {
      this.addClass(item, 'win')
    }
  }

  hasClass (el, className) {
    if (el.classList) {
      return el.classList.contains(className)
    } else {
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
    }
  }

  addClass (el, className) {
    if (el.classList) {
      el.classList.add(className)
    } else if (!this.hasClass(el, className)) {
      el.className += ' ' + className
    }
  }
}

module.exports = MockWeb
