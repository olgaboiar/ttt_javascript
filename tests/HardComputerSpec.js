/* eslint-env mocha */
const assert = require('assert')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)
const GameRules = require('./../src/classes/GameRules.js')
const HardComputer = require('./../src/classes/HardComputer.js')
const Board = require('./../src/classes/Board.js')
const Web = require('./../src/classes/Web.js')
const Ui = require('./../src/classes/Ui.js')

var computer, board, gameRules, ui, web, hardComputer, easyComputer, mediumComputer

describe('HardComputer', function () {
  before(function () {
    gameRules = new GameRules()
    web = new Web()
    ui = new Ui(gameRules, web)
    computer = new HardComputer(ui, 'o', gameRules)
  })

  beforeEach(function () {
    board = new Board()
  })

  it('should return -6 when the last winning move is not compuetrs', function () {
    board.spots = ['x', 'x', 'x', 'o', 'o', '', '', '', '']
    let expected = computer.moveScore(board, 'x', 4)
    assert.strictEqual(expected, -6)
  })

  it('should return 6 when the last winning move is compuetrs', function () {
    board.spots = ['o', 'o', 'o', 'x', 'x', '', '', '', '']
    let expected = computer.moveScore(board, 'o', 4)
    assert.strictEqual(expected, 6)
  })

  it('should return 0 when board is tie and the last move is compuetrs', function () {
    board.spots = ['o', 'x', 'o', 'o', 'x', 'x', 'x', 'o', 'o']
    let expected = computer.moveScore(board, 'o', 4)
    assert.strictEqual(expected, 0)
  })

  it('should return 0 when board is tie and the last move is not compuetrs', function () {
    board.spots = ['x', 'o', 'x', 'x', 'o', 'o', 'o', 'x', 'x']
    let expected = computer.moveScore(board, 'x', 4)
    assert.strictEqual(expected, 0)
  })

  it('should return null for opponent symbol when it was not set', function () {
    let actual = computer.opponent
    assert.strictEqual(null, actual)
  })

  it('should return opponent symbol aftre it is set', function () {
    computer.setOpponent('cupcake')
    let expected = 'cupcake'
    let actual = computer.opponent
    assert.strictEqual(expected, actual)
  })

  it('should return computers symbol o when called with opponent symbol x', function () {
    computer.setOpponent('x')
    let expected = 'o'
    let actual = computer.switchMarker('x')
    assert.strictEqual(expected, actual)
  })

  it('should return opponent symbol x when called with computer symbol o', function () {
    computer.setOpponent('x')
    let expected = 'x'
    let actual = computer.switchMarker('o')
    assert.strictEqual(expected, actual)
  })

  it('should call the setOpponent method with opponent symbol as argument', function () {
    let spy = sinon.spy(computer, 'setOpponent')
    board.spots = ['x', 'x', '', 'o', 'o', '', '', '', '']
    computer.getMove(board, 'x')
    expect(spy).to.have.been.calledWith('x')
  })

  it('should call the calculateMoves method with the board and opponent symbol as arguments', function () {
    let spy = sinon.spy(computer, 'calculateMoves')
    board.spots = ['x', 'x', '', 'o', 'o', '', '', '', '']
    computer.getMove(board, 'x')
    expect(spy).to.have.been.calledWith(board, 'x')
  })

  it('should return the max scored move when computers move', function () {
    let expected = 2
    let actual = computer.getBestMove([-3, 4, 2], [1, 2, 4], 'o')
    assert.strictEqual(expected, actual)
  })

  it('should return the min scored move when opponents move', function () {
    let expected = 1
    let actual = computer.getBestMove([-3, 4, 2], [1, 2, 4], 'x')
    assert.strictEqual(expected, actual)
  })
})
