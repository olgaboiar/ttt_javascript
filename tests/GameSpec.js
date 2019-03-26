/* eslint-env mocha */
const chai = require('chai')
// const sinon     = require('sinon')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)
const Game = require('./../src/classes/Game.js')
const Board = require('./../src/classes/Board.js')
const GameRules = require('./../src/classes/GameRules.js')
const WebUI = require('./../src/classes/WebUI.js')
const Player = require('./../src/classes/Player.js')
var game, board, gameRules, playerX, playerO, ui

describe('Game', function () {
  beforeEach(function () {
    board = new Board()
    gameRules = new GameRules()
    ui = new WebUI(gameRules)
    game = new Game(gameRules, board, ui)
  })

  before(function () {
    playerX = new Player('x')
    playerO = new Player('o')
  })

  it('should return an x player', function () {
    game.setCurrentPlayer(playerX, playerO)
    expect(game.currentPlayer.marker).to.equal('x')
  })

  it('should return an o player', function () {
    game.setCurrentPlayer(playerX, playerO)
    expect(game.nextPlayer.marker).to.equal('o')
  })

  it('should return an o player as current player after switching', function () {
    game.setCurrentPlayer(playerX, playerO)
    game.switch(game.currentPlayer, game.nextPlayer)
    expect(game.currentPlayer.marker).to.equal('x')
  })

  it('should be Null before players are created', function () {
    expect(game.player1).to.equal(null)
  })

  it('should create x player', function () {
    game.createPlayers()
    expect(game.player1.marker).to.equal('x')
  })

  it('should create o player', function () {
    game.createPlayers()
    expect(game.player2.marker).to.equal('o')
  })

//   it('should never enter the loop because the board is tie', function () {
//     let board = new Board()
//     board.setMove(3, 'o')
//     board.setMove(5, 'o')
//     board.setMove(7, 'o')
//     game.setCurrentPlayer(playerX, playerO)
//     // game.setNextPlayer(playerX, playerO)
//     let spy = sinon.spy(game.currentPlayer, 'move')
//     game.play(board, game.currentPlayer, game.nextPlayer)
//     expect(spy).to.not.have.been.called
//   })
})
