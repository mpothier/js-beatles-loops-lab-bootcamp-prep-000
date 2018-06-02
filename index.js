function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  console.log(myArray)
  return myArray
}

var first = [1,2,3,4,5]
var second = ['a','b','c','d','e']

theBeatlesPlay(first, second)