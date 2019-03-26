/* eslint-env mocha */
const assert = require('assert')
const chai = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const GameRules = require('./../src/classes/GameRules.js')
const Computer = require('./../src/classes/Computer.js')
const Board = require('./../src/classes/Board.js')

var computer, board, gameRules

describe('Computer', function () {
  before(function () {
    gameRules = new GameRules()
    computer = new Computer('o', null, null, gameRules)
  })

  beforeEach(function () {
    board = new Board()
  })

  it('should return -6 when the last winning move is not compuetrs', function () {
    // board.setMove(0, 'x')
    // board.setMove(1, 'x')
    // board.setMove(2, 'x')
    // board.setMove(3, 'o')
    // board.setMove(4, 'o')
    board.spots = ['x', 'x', 'x', 'o', 'o', '', '', '', '']
    let expected = computer.moveScore(board, 'x', 4)
    assert.strictEqual(expected, -6)
  })

  it('should return 6 when the last winning move is compuetrs', function () {
    board.setMove(0, 'o')
    board.setMove(1, 'o')
    board.setMove(2, 'o')
    board.setMove(3, 'x')
    board.setMove(4, 'x')
    let expected = computer.moveScore(board, 'o', 4)
    assert.strictEqual(expected, 6)
  })

  it('should return 0 when board is tie and the last move is compuetrs', function () {
    board.setMove(0, 'o')
    board.setMove(1, 'x')
    board.setMove(2, 'o')
    board.setMove(3, 'o')
    board.setMove(4, 'x')
    board.setMove(5, 'x')
    board.setMove(6, 'x')
    board.setMove(7, 'o')
    board.setMove(8, 'o')
    let expected = computer.moveScore(board, 'o', 4)
    assert.strictEqual(expected, 0)
  })

  it('should return 0 when board is tie and the last move is not compuetrs', function () {
    board.setMove(0, 'x')
    board.setMove(1, 'o')
    board.setMove(2, 'x')
    board.setMove(3, 'x')
    board.setMove(4, 'o')
    board.setMove(5, 'o')
    board.setMove(6, 'o')
    board.setMove(7, 'x')
    board.setMove(8, 'x')
    let expected = computer.moveScore(board, 'x', 4)
    assert.strictEqual(expected, 0)
  })
})
