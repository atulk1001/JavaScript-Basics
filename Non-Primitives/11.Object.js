// Object methods are removed when using JSON.stringify() and JSON.parse() methods.

let mathObj = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  name: "Math Operations",
};

let mathObjCopy = JSON.parse(JSON.stringify(mathObj));
console.log(mathObjCopy); // { name: 'Math Operations' }
