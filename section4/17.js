// -----------------------------------
console.log("17- Exercise 8- Sum of Multiples of 3 and 5");
// -----------------------------------

function sum(limit) {
  let total = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }

  return total;
}

// execution
console.log("sum", sum(10));
