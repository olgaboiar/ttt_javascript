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

  humanTurn (symbol) {
    if (symbol === this.humanSymbol) {
      return true
    } else {
      return false
    }
  }

  move (player, board, spot, gameRules) {
    board.setMove(spot, player.symbol)
    this.showMove(this.htmlCells[spot], player)
    if (gameRules.gameOver(board)) this.showWinner(player)
  }

  computerMove (gameBoard, computer, human, gameRules) {
    let spot = computer.getMove(gameBoard, human.symbol)
    this.move(computer, gameBoard, spot, gameRules)
  }

  play (gameBoard, currentPlayer, nextPlayer, gameRules) {
    if (!gameRules.gameOver(gameBoard) && !this.humanTurn(currentPlayer.symbol)) {
      this.computerMove(gameBoard, currentPlayer, nextPlayer, gameRules)
      nextPlayer = [currentPlayer, currentPlayer = nextPlayer][0]
    }
    gameBoard.spots.forEach((cell, index) => {
      this.htmlCells[index].addEventListener('click', () => {
        if (this.hasClass(this.htmlCells[index], currentPlayer.symbol) || this.hasClass(this.htmlCells[index], nextPlayer.symbol) || gameRules.gameOver(gameBoard) || !this.humanTurn(currentPlayer.symbol)) return false
        this.move(currentPlayer, gameBoard, index, gameRules)
        if (!gameRules.gameOver(gameBoard)) {
          this.computerMove(gameBoard, nextPlayer, currentPlayer, gameRules)
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

module.exports = Web
