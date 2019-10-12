console.log("7- Value vs Reference Types");

console.log("Primitives are copied by their value");
let x = 10;
let y = x;
x += 10;

console.log("x", x);
console.log("y", y);

console.log("Objects are copied by their reference");
let p1 = { name: "John Smit", age: 30 };
let p2 = p1;
p2.age = 35;

console.log("p1", p1);
console.log("p2", p2);
