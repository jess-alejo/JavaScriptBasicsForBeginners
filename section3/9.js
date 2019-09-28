// -----------------------------------
console.log("9- Bitwise Operators");
// -----------------------------------

// in computer, numbers are stored in binary format
// 1 = 00000001 | 8-bits = 1 byte
// 2 = 00000010

// JavaScript works on individual bits

// Bitwise OR
console.log(1 | 2);
// if either number is 1, result will be 1
// 1 = 00000001
// 2 = 00000010
// ------------
// 3 = 00000011

// Bitwise AND
console.log(1 & 2);
// if both numbers are 1, result will be 1
// 1 = 00000001
// 2 = 00000010
// ------------
// 0 = 00000000

// Sample usage (Permission)
// Read:    00000001
// Write:   00000010
// Execute: 00000100

const readAccess = 1;
const writeAccess = 2;
const runAccess = 4;

let myPermission = 0;
myPermission = myPermission | readAccess | writeAccess;

let canRead = myPermission & readAccess ? "yes" : "no";
console.log("read allowed", canRead);

let canExecute = myPermission & runAccess ? "yes" : "no";
console.log("execute allowed", canExecute);
