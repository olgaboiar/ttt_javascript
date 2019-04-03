/* eslint-env mocha */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)
const Game = require('./../src/classes/Game.js')
const Board = require('./../src/classes/Board.js')
const GameRules = require('./../src/classes/GameRules.js')
const MockWeb = require('./MockWeb.js')
const Ui = require('./../src/classes/Ui.js')
const Player = require('./../src/classes/Player.js')
var game, board, gameRules, playerX, playerO, ui, web

describe('Game', function () {
  before(function () {
    board = new Board()
    gameRules = new GameRules()
    web = new MockWeb()
    ui = new Ui(gameRules, web)
    game = new Game(gameRules, board, ui)
    playerX = new Player(ui, 'x', gameRules)
    playerO = new Player(ui, 'o', gameRules)
  })

  it('should call the ui printBoard method', function () {
    let spy = sinon.spy(ui, 'printBoard')
    game.printBoard()
    expect(spy).to.have.been.called
  })

  it('should be Null before players are created', function () {
    expect(game.currentPlayer).to.equal(null)
  })

  it('should create x player', function () {
    game.createPlayers('x', 'o', gameRules, 'x')
    expect(game.currentPlayer.symbol).to.equal('o')
  })

  it('should create o player', function () {
    game.createPlayers('x', 'o', gameRules, 'x')
    expect(game.nextPlayer.symbol).to.equal('x')
  })

  it('should call the ui play method', function () {
    let spy = sinon.spy(ui, 'play')
    game.play(board, playerX, playerO)
    expect(spy).to.have.been.called
  })
})
