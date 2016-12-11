var test = require('tape')

var add = require('../named-sync-callback')

test('adds two numbers using a named sync callback', function (t) {
  var expected = 4

  add(1, 3, function (actual) {
    t.equal(actual, expected, 'sum is correct')
    t.end()
  })
})
