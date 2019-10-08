console.log("6- Functions are Objects");

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

// above function can be written like this:
const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function() {
  console.log("draw");
};
`
);

// different ways of creating an object
const usingNewKeyword = new Circle1(1);
console.log(usingNewKeyword);

const usingCallMethod = {};
Circle1.call(usingCallMethod, 2);
console.log(usingCallMethod);

const usingApplyMethod = {};
Circle.apply(usingApplyMethod, [3, 2, 1]);
console.log(usingApplyMethod);
