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

  it('should move x on the cell 5 of the board', function () {
    let board = new Board()
    board.setMove(4, 'x')
    let actual = board.spots.toString()
    let expected = (['', '', '', '', 'x', '', '', '', '']).toString()
    assert.strictEqual(actual, expected)
  })
})
