// -----------------------------------
// 6. Arrays
// -----------------------------------
// use to store list of items
let selectedColors = ["red", "blue"];
console.log(selectedColors);

// array is an object
console.log("Array type is", typeof selectedColors);

// get size of an array
console.log("There are", selectedColors.length, "items in the array");

// use index to access element, first item starts at zero
console.log("The first item is", selectedColors[0]);

// can store dynamic type
selectedColors[3] = 1;
console.log("After adding a fourth item", selectedColors);
