var test = require('tape')

var add = require('../sync-callback')

test('adds two numbers using an anonymous sync callback', function (t) {
  var expected = 4

  add(1, 3, function (actual) {
    t.equal(actual, expected, 'sum is correct')
    t.end()
  })
})
