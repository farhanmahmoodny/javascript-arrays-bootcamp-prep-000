
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}
addElementToBeginningOfArray([1], 'foo')

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}
