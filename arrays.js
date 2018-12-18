
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var num = [1]
var elem = ('foo')
function addElementToBeginningOfArray(array, element){
  console.log([elem, ...num])
  return num
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return num.unshift(elem)
}
