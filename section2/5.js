// -----------------------------------
// 5. Objects
// -----------------------------------
// object literal is a comma-separated list of name-value pairs wrapped in
// curly braces
let person = {
  name: "John Denver",
  title: "Musician"
};

console.log("person", person);

// -----------------------------------
// 2 ways of accessing properties
// -----------------------------------
// Dot Notation
person.name = "Michael Jordan";
console.log(person.name);

// Bracket Notation
person["name"] = "Peter Parker";
console.log(person["name"]);
