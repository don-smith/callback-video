var test = require('tape')

var add = require('../sync')

test('adds two numbers using a synchronous function', function (t) {
  var expected = 4

  var actual = add(1, 3)

  t.equal(actual, expected, 'sum is correct')
  t.end()
})
