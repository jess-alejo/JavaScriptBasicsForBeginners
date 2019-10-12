console.log("8- Enumerating Properties of an Object");

const circle = {
  radius: 1,
  draw: function() {
    console.log("draw");
  }
};

// iterate over properties
for (const key in circle) {
  console.log(key, circle[key]);
}

for (const key of Object.keys(circle)) {
  console.log(key, circle[key]);
}

for (const entry of Object.entries(circle)) {
  console.log(entry);
}

// Check if a given key exists
if ("radius" in circle) console.log("yes");
