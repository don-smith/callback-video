var test = require('tape')

var add = require('../named-async-callback')

test('adds two numbers using a named async callback', function (t) {
  var expected = 4

  add(1, 3, function (actual) {
    t.equal(actual, expected, 'sum is correct')
    t.end()
  })
})
