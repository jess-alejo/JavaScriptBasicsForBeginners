// -----------------------------------
// 8. Types of Functions
// -----------------------------------

// -----------------------------------
// Performing a task
// -----------------------------------
function sayHelloTo(name) {
  console.log("Hello", name);
}

sayHelloTo("Jane");

// -----------------------------------
// Calculating a value
// -----------------------------------
function squareOf(number) {
  // use the return key word to return the result
  // to the caller of the function
  return number * number;
}

let number = 5;
let result = squareOf(number);
console.log("Square of", number, "is", result);
