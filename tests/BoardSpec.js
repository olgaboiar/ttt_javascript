/* eslint-env mocha */

const assert = require('assert')
const Board = require('./../src/classes/Board.js')

describe('Board', function () {
  it('should return an array of 1-9 for an empty board', function () {
    let board = new Board()
    let actual = board.availableSpots().length
    let expected = (['', '', '', '', '', '', '', '', '']).length
    assert.strictEqual(actual, expected)
  })

  it('should return an array of 12346789 for a board where 5 is taken by x', function () {
    let board = new Board()
    board.setMove(4, 'x')
    let actual = board.availableSpots().length
    let expected = (['', '', '', '', '', '', '', '']).length
    assert.strictEqual(actual, expected)
  })

  it('should return an array of 1234678 for a board where 5 is taken by x and 9 is taken by o', function () {
    let board = new Board()
    board.setMove(4, 'x')
    board.setMove(8, 'o')
    let actual = board.availableSpots().length
    let expected = (['', '', '', '', '', '', '']).length
    assert.strictEqual(actual, expected)
  })

  it('should set x on the cell 5 of the board', function () {
    let board = new Board()
    board.setMove(4, 'x')
    let actual = board.spots[4]
    let expected = 'x'
    assert.strictEqual(actual, expected)
  })

  it('should set cupcake string as a symbol on the cell 9 of the board', function () {
    let board = new Board()
    board.setMove(8, 'cupcake')
    let actual = board.spots[8]
    let expected = 'cupcake'
    assert.strictEqual(actual, expected)
  })

  it('should save every move on the board', function () {
    let board = new Board()
    board.setMove(8, 'x')
    board.setMove(1, 'o')
    board.setMove(2, 'x')
    board.setMove(3, 'o')
    let actual = board.spots.toString()
    let expected = (['', 'o', 'x', 'o', '', '', '', '', 'x']).toString()
    assert.strictEqual(actual, expected)
  })
})
