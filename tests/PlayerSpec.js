/* eslint-env mocha */
const assert = require('assert')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)
const Player = require('./../src/classes/Player.js')
const Board = require('./../src/classes/Board.js')
const GameRules = require('./../src/classes/GameRules.js')
const MockWeb = require('./MockWeb.js')
const Ui = require('./../src/classes/Ui.js')

var gameRules, playerX, playerO, ui, web
describe('Player', function () {
  before(function () {
    gameRules = new GameRules()
    web = new MockWeb()
    ui = new Ui(gameRules, web)
    playerX = new Player(ui, 'x', gameRules)
    playerO = new Player(ui, 'o', gameRules)
  })

  it('should create a player with an x marker', function () {
    assert.strictEqual(playerX.symbol, 'x')
  })

  it('should create a player with an o marker', function () {
    assert.strictEqual(playerO.symbol, 'o')
  })

  it('should call the board set_move method', function () {
    let board = new Board()
    let spy = sinon.spy(board, 'setMove')
    playerX.move(board, 1)
    expect(spy).to.have.been.called
  })

  it('should call the board set_move method with cell 1 and marker x as arguments', function () {
    let board = new Board()
    let spy = sinon.spy(board, 'setMove')
    playerX.move(board, 1)
    expect(spy).to.have.been.calledWith(1, 'x')
  })
})
