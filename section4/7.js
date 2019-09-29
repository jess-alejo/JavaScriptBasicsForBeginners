// -----------------------------------
console.log("7- For...in Loop");
// -----------------------------------

// used in iterating over object properties
// or items in an array

let person = {
  name: "John",
  age: 30
};

for (let key in person) {
  console.log(key, person[key]);
}

let colors = ["red", "blue", "yellow"];
for (let index in colors) {
  console.log(index, colors[index]);
}
