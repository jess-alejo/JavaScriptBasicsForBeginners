// -----------------------------------
console.log("13- Exercise 4- Demerit Points");
// -----------------------------------

// Speed Limit = 70 (ok)
// for every 5 above speed limit -> 1 point
// 12 points -> suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoints = 5;
  const points = Math.floor((speed - speedLimit) / kmPerPoints);

  if (points >= 12) {
    console.log("License suspended");
  } else if (points > 0) {
    console.log(points, "Points");
  } else {
    console.log("Ok");
  }
}

// test cases
const speeds = [70, 81, 50, 100, 130];

for (const speed of speeds) {
  checkSpeed(speed);
}
