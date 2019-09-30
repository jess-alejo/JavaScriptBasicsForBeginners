// -----------------------------------
console.log("15- Exercise 6- Count Truthy");
// -----------------------------------

function countTruthy(array) {
  let count = 0;
  for (const item of array) {
    if (item) {
      count++;
    }
  }

  return count;
}

const array = [0, null, undefined, NaN, "", 2, 3];
console.log(countTruthy(array));
