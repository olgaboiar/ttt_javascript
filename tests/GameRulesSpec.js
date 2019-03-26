/* eslint-env mocha */

var expect = require('expect.js')
var gameRules, board
const GameRules = require('./../src/classes/GameRules.js')
const Board = require('./../src/classes/Board.js')

describe('GameRules', function () {
  before(function () {
    gameRules = new GameRules()
  })

  beforeEach(function () {
    board = new Board()
  })

  it('should return true for a board where 1, 2, and 3 are x', function () {
    board.setMove(1, 'x')
    board.setMove(2, 'x')
    board.setMove(0, 'x')
    expect(gameRules.horizontalWin(board)).to.be.ok()
  })

  it('should return true for a board where 4, 5, and 6 are x', function () {
    board.setMove(4, 'x')
    board.setMove(5, 'x')
    board.setMove(3, 'x')
    expect(gameRules.horizontalWin(board)).to.be.ok()
  })

  it('should return false for a board where 7 and 8 are x but 9 is o', function () {
    board.setMove(7, 'x')
    board.setMove(8, 'x')
    board.setMove(6, 'o')
    expect(gameRules.horizontalWin(board)).to.not.be.ok()
  })

  it('should return false for an empty board', function () {
    expect(gameRules.horizontalWin(board)).to.not.be.ok()
  })

  it('should return true for a board where 1, 4, and 7 are x', function () {
    board.setMove(0, 'x')
    board.setMove(3, 'x')
    board.setMove(6, 'x')
    expect(gameRules.verticalWin(board)).to.be.ok()
  })

  it('should return true for a board where 3, 6, and 9 are o', function () {
    board.setMove(2, 'o')
    board.setMove(5, 'o')
    board.setMove(8, 'o')
    expect(gameRules.verticalWin(board)).to.be.ok()
  })

  it('should return false for a board where 7 and 8 are x but 9 is o', function () {
    board.setMove(6, 'x')
    board.setMove(7, 'x')
    board.setMove(8, 'o')
    expect(gameRules.verticalWin(board)).to.not.be.ok()
  })

  it('should return false for an empty board', function () {
    expect(gameRules.verticalWin(board)).to.not.be.ok()
  })

  it('should return true for a board where 1, 5, and 9 are x', function () {
    board.setMove(0, 'x')
    board.setMove(4, 'x')
    board.setMove(8, 'x')
    expect(gameRules.diagonalWin(board)).to.be.ok()
  })

  it('should return true for a board where 3, 5, and 7 are o', function () {
    board.setMove(2, 'o')
    board.setMove(4, 'o')
    board.setMove(6, 'o')
    expect(gameRules.diagonalWin(board)).to.be.ok()
  })

  it('should return false for a board where 7 and 5 are x but 3 is o', function () {
    board.setMove(6, 'x')
    board.setMove(4, 'x')
    board.setMove(2, 'o')
    expect(gameRules.diagonalWin(board)).to.not.be.ok()
  })

  it('should return false for an empty board', function () {
    expect(gameRules.diagonalWin(board)).to.not.be.ok()
  })

  it('should return true for a board with a horizontal x', function () {
    board.setMove(0, 'x')
    board.setMove(1, 'x')
    board.setMove(2, 'x')
    expect(gameRules.win(board)).to.be.ok()
  })

  it('should return true for a board with a vertical o', function () {
    board.setMove(2, 'o')
    board.setMove(5, 'o')
    board.setMove(8, 'o')
    expect(gameRules.win(board)).to.be.ok()
  })

  it('should return true for a board with a diagonal x', function () {
    board.setMove(0, 'x')
    board.setMove(4, 'x')
    board.setMove(8, 'x')
    expect(gameRules.win(board)).to.be.ok()
  })

  it('should return false for an empty board', function () {
    expect(gameRules.win(board)).to.not.be.ok()
  })

  it('should return false for a tie board', function () {
    board.setMove(0, 'x')
    board.setMove(1, 'o')
    board.setMove(2, 'o')
    board.setMove(3, 'o')
    board.setMove(4, 'x')
    board.setMove(5, 'x')
    board.setMove(6, 'x')
    board.setMove(7, 'x')
    board.setMove(8, 'o')
    expect(gameRules.win(board)).to.not.be.ok()
  })

  it('should return true for a tie board', function () {
    board.setMove(0, 'x')
    board.setMove(1, 'o')
    board.setMove(2, 'o')
    board.setMove(3, 'o')
    board.setMove(4, 'x')
    board.setMove(5, 'x')
    board.setMove(6, 'x')
    board.setMove(7, 'x')
    board.setMove(8, 'o')
    expect(gameRules.tie(board)).to.be.ok()
  })

  it('should return false for a non-tie board', function () {
    board.setMove(0, 'x')
    board.setMove(1, 'o')
    board.setMove(2, 'x')
    board.setMove(3, 'o')
    expect(gameRules.tie(board)).to.not.be.ok()
  })

  it('should return false for an empty board', function () {
    expect(gameRules.tie(board)).to.not.be.ok()
  })

  it('should return true for a tie board', function () {
    board.setMove(0, 'x')
    board.setMove(1, 'o')
    board.setMove(2, 'o')
    board.setMove(3, 'o')
    board.setMove(4, 'x')
    board.setMove(5, 'x')
    board.setMove(6, 'x')
    board.setMove(7, 'x')
    board.setMove(8, 'o')
    expect(gameRules.gameOver(board)).to.be.ok()
  })

  it('should return true for a win board', function () {
    board.setMove(2, 'o')
    board.setMove(4, 'o')
    board.setMove(6, 'o')
    expect(gameRules.gameOver(board)).to.be.ok()
  })

  it('should return false for an empty board', function () {
    expect(gameRules.gameOver(board)).to.not.be.ok()
  })
})
