// -----------------------------------
console.log("9- Break and Continue");
// -----------------------------------

// "break: jump out of the loop
console.log("Stop printing if i is 5");
let i = 0;
while (i <= 10) {
  if (i === 5) break;

  console.log(i);
  i++;
}
// -----------------------------------
// continue: jump to next iteration
console.log("Print only odd numbers");
let j = 0;
while (j <= 10) {
  if (j % 2 === 0) {
    j++;
    continue;
  }

  console.log(j);
  j++;
}
