// -----------------------------------
console.log("12- Exercise 3- FizzBuzz");
// -----------------------------------

// Fizz: input is divisible by 3
// Buzz: input is divisible by 5
// FizzBuzz: input is both divisible by 3 and 5
function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 5 === 0) return "Buzz";

  if (input % 3 === 0) return "Fizz";

  return input;
}

const items = [3, null, 5, "30", 7, false, 15, undefined];

for (item of items) {
  console.log(item, fizzBuzz(item));
}
