function nextInLine(arr, item) {
  arr.push(item); //pushing item at the end of arr 
  var removed = arr.shift(); //shifting to get the first item and store it in removed
  return removed; 
}

var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); 
console.log("After: " + JSON.stringify(testArr));
