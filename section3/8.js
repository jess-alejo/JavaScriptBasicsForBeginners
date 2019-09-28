// -----------------------------------
console.log("8- Logical Operators with Non-booleans");
// -----------------------------------

// The result of the logical operators depend on the value
// of the operands

console.log(false || true); // returns true;
console.log(false || "John"); // returns John;
console.log(false || 1); // returns 1;

// JS will interpret the operands as truthy or falsy

// Falsy (will treat as false)
// undefined
// null
// 0 - number zero
// false - boolean false
// '' - empty string
// NaN - not a number

// Anything that is not Falsy is Truthy

let userColor;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
