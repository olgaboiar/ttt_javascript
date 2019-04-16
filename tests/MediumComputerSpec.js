/* eslint-env mocha */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)
const GameRules = require('./../src/classes/GameRules.js')
const MediumComputer = require('./../src/classes/MediumComputer.js')
const Board = require('./../src/classes/Board.js')
const Web = require('./../src/classes/Web.js')
const Ui = require('./../src/classes/Ui.js')

var computer, board, gameRules, ui, web

describe('MediumComputer', function () {
  before(function () {
    gameRules = new GameRules()
    web = new Web()
    ui = new Ui(gameRules, web)
    computer = new MediumComputer(ui, 'o', gameRules)
  })

  beforeEach(function () {
    board = new Board()
  })

  it('should call the centerMove method with board as argument', function () {
    let spy = sinon.spy(computer, 'centerMove')
    computer.getMove(board)
    expect(spy).to.have.been.calledWith(board)
  })

  it('should place computers marker in the center', function () {
    let expected = 4
    let actual = computer.getMove(board)
    expect(expected).to.equal(actual)
  })

  it('should call the randomMove method with board as argument when center is taken', function () {
    let spy = sinon.spy(computer, 'randomMove')
    board.setMove(4, 'x')
    computer.getMove(board)
    expect(spy).to.have.been.calledWith(board)
  })
})
