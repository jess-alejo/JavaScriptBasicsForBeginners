// -----------------------------------
console.log("18- Exercise 9- Grade");
// -----------------------------------

// F: 1-59
// D: 60-69
// C: 70-79
// B: 80-89
// A: 90-100

const array = [80, 80, 50];

console.log(calculateGrade(array));

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average >= 90) return "A";

  if (average >= 80) return "B";

  if (average >= 70) return "C";

  if (average >= 60) return "D";

  return "F";
}

function calculateAverage(array) {
  let sum = 0;

  for (const value of array) {
    sum += value;
  }

  return sum / array.length;
}
