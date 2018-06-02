function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myArray
}

function johnLennonFacts(facts) {
  var newArray = []
  let i = 0
  while (i < facts.length) {
    newArray.push(facts[i] += "!!!")
    ++i
  }
  console.log(newArray)
  return newArray
}

test = ['a','b','c']

johnLennonFacts(test)