
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var arr = [1]
var elem = ('foo')
function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}
addElementToBeginningOfArray(arr, elem)

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}
function destructivelyAddElementToBeginningOfArray(arr, elem)
