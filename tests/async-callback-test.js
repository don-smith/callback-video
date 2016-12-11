var test = require('tape')

var add = require('../async-callback')

test('adds two numbers using an anonymous async callback', function (t) {
  var expected = 4

  add(1, 3, function (actual) {
    t.equal(actual, expected, 'sum is correct')
    t.end()
  })
})
