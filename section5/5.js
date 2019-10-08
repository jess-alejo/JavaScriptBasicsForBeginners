console.log("5- Constructor Property");

// Every object has a constructor property
// and that references the function that was used
// to create the object

let x = { color: "red" };
let y = new Object({ color: "red" });
console.log(x, y);

let firstName = "Jess"; // typeof string
let lastName = new String("Alejo"); // typeof object
console.log(firstName + " " + lastName);

let num1 = 10; // typeof number
let num2 = new Number(5); // typeof object
console.log(num1 * num2);

let yes = true; // typeof boolean
let yup = new Boolean(true); // typeof object
console.log(yes == yup);
