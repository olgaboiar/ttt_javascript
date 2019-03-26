/* eslint-env mocha */
const assert = require('assert')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)
const Player = require('./../src/classes/Player.js')
const Board = require('./../src/classes/Board.js')

var playerO, playerX
describe('Player', function () {
  before(function () {
    playerX = new Player('x')
    playerO = new Player('o')
  })

  it('should create a player with an x marker', function () {
    assert.strictEqual(playerX.marker, 'x')
  })

  it('should create a player with an o marker', function () {
    assert.strictEqual(playerO.marker, 'o')
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
