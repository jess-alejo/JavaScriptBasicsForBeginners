// -----------------------------------
console.log("19- Exercise 10- Stars");
// -----------------------------------

showStars(10);

function showStars(rows) {
  let star = "";

  for (let i = 1; i <= rows; i++) {
    star += "*";
    console.log(star);
  }
}

// implement nested loop
// multiplication table

printMultiplicationTable(5, 5);

function printMultiplicationTable(rows, columns) {
  for (let x = 1; x <= rows; x++) {
    for (y = 1; y <= columns; y++) {
      console.log(x, "x", y, "=", x * y);
    }
    console.log("-----");
  }
}
