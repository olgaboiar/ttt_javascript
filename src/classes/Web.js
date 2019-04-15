class Web {
  constructor (humanSymbol, computerSymbol) {
    this.humanSymbol = humanSymbol
    this.computerSymbol = computerSymbol
    this.board = null
    this.htmlCells = null
  }

  setBoard () {
    this.board = document.getElementById('board')
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

  move (player, board, spot, gameRules) {
    board.setMove(spot, player.symbol)
    this.showMove(spot, player)
    if (gameRules.gameOver(board) && gameRules.win(board)) this.showWinner(player)
  }

  notClickable (currentPlayer, nextPlayer, gameBoard, gameRules, index) {
    return this.hasClass(this.htmlCells[index], currentPlayer.symbol) ||
           this.hasClass(this.htmlCells[index], nextPlayer.symbol) ||
           gameRules.gameOver(gameBoard)
  }

  playersMove (currentPlayer, nextPlayer, gameBoard, gameRules, index, humanTurn) {
    this.move(currentPlayer, gameBoard, index, gameRules)
    if (!gameRules.gameOver(gameBoard)) {
      let spot = nextPlayer.getMove(gameBoard, currentPlayer.symbol)
      this.move(nextPlayer, gameBoard, spot, gameRules)
    }
  }

  play (gameBoard, currentPlayer, nextPlayer, gameRules, humanTurn) {
    gameBoard.spots.forEach((cell, index) => {
      this.htmlCells[index].addEventListener('click', () => {
        if (this.notClickable(currentPlayer, nextPlayer, gameBoard, gameRules, index) || !humanTurn) return false
        this.playersMove(currentPlayer, nextPlayer, gameBoard, gameRules, index)
      }, false)
    })
  }

  showMove (spot, player) {
    let cell = this.htmlCells[spot]
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

module.exports = Web
