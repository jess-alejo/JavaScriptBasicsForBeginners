// -----------------------------------
console.log("14- Exercise 5- Even and Odd Numbers");
// -----------------------------------

function showNumbers(limit) {
  if (typeof limit !== "number") {
    console.log(limit, "is not a number");
    return;
  }

  for (let i = 0; i <= limit; i++) {
    const type = i % 2 ? "EVEN" : "ODD";
    console.log(i, type);
  }
}

showNumbers(10);
