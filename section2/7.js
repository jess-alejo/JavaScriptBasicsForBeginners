// -----------------------------------
// 7. Functions
// -----------------------------------
// A set of statements that performs a task or calculate a value

// declaring a function
function greet(name) {
  // body of a statement / code block
  console.log("Hello", name);
}

// calling a function
greet("John");
// trivia:
// name is a parameter of the greet function
// "John" is an argument to the greet function

// we can reuse the function
greet("Mary");

// function can have multiple parameters
function add(num1, num2) {
  console.log("The sum of", num1, "and", num2, "is", num1 + num2);
}

add(5, 8);
