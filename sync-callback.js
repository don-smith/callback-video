console.log('before')
add(1, 3, function (result) {
  console.log('after')
  console.log('sum:', result)
})

function add (n1, n2, callback) {
  console.log('during')
  var sum = n1 + n2
  callback(sum)
}

module.exports = add
