console.log('before')
var sum = add(1, 3)
console.log('after')
console.log('sum:', sum)

function add (n1, n2) {
  console.log('during')
  var sum = n1 + n2
  return sum
}

module.exports = add
