// -----------------------------------
console.log("16- Exercise 7- String Properties");
// -----------------------------------

function showProperties(obj) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string") console.log(key, value);
  }
}

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  directory: "b"
};

showProperties(movie);
