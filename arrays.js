
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var array = [1]
var element = ('foo')
function addElementToBeginningOfArray(array, element){
  ['foo', ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}
