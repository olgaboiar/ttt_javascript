/* eslint-env mocha */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)
const GameRules = require('./../src/classes/GameRules.js')
const EasyComputer = require('./../src/classes/EasyComputer.js')
const Board = require('./../src/classes/Board.js')
const Web = require('./../src/classes/Web.js')
const Ui = require('./../src/classes/Ui.js')

var computer, board, gameRules, ui, web

describe('EasyComputer', function () {
  before(function () {
    gameRules = new GameRules()
    web = new Web()
    ui = new Ui(gameRules, web)
    computer = new EasyComputer(ui, 'o', gameRules)
  })

  beforeEach(function () {
    board = new Board()
  })

  it('should call the randomMove method with board as argument', function () {
    let spy = sinon.spy(computer, 'randomMove')
    computer.getMove(board)
    expect(spy).to.have.been.calledWith(board)
  })
})
