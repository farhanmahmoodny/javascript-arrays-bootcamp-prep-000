
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}
addElementToBeginningOfArray([1], 'foo')

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = [1]
  return  array.unshift(element)
}
destructivelyAddElementToBeginningOfArray(array, 'foo')
