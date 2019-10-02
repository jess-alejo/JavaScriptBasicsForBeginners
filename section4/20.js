// -----------------------------------
console.log("20- Exercise 11- Prime Numbers");
// -----------------------------------

showPrimes(20);

// Prime : whose factors are only 1 and itself
// Composite: has more than two factors

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }

  return true;
}
