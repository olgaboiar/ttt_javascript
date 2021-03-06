/* eslint-env mocha */
const assert = require('assert')
const chai = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const GameRules = require('./../src/classes/GameRules.js')
const Computer = require('./../src/classes/Computer.js')
const Board = require('./../src/classes/Board.js')
const Web = require('./../src/classes/Web.js')
const Ui = require('./../src/classes/Ui.js')

var computer, board, gameRules, ui, web

describe('Computer', function () {
  before(function () {
    gameRules = new GameRules()
    web = new Web()
    ui = new Ui(gameRules, web)
    computer = new Computer(ui, 'o', gameRules)
  })

  beforeEach(function () {
    board = new Board()
  })

  it('should return 1 or 2 or 3 for a board with only those cell availabls', function () {
    board.spots = ['x', '', '', '', 'o', 'x', 'o', 'o', 'x']
    let possible = [1, 2, 3]
    let actual = computer.randomMove(board)
    assert(possible.includes(actual))
  })
})
