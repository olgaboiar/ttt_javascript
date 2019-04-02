class Player {
  constructor (ui, symbol, gameRules) {
    this.ui = ui
    this.symbol = symbol
    this.gameRules = gameRules
  }

  move (board, cell) {
    board.setMove(cell, this.symbol)
  }
}

module.exports = Player
