console.log("4- Dynamic Nature of Objects");

const circle = {
  radius: 1
};

// we can still add properties/methods
circle.color = "yellow";
circle.draw = function() {
  console.log("draw");
};

// or delete properties/methods
delete circle.color;
delete circle.draw;

console.log(circle);
