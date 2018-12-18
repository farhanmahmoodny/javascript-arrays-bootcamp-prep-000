
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}
addElementToBeginningOfArray([1], 'foo')

function destructivelyAddElementToBeginningOfArray(array, element){
  var arr =[1]
  var elem = ('foo')
  return arr.unshift(elem)
}
