// Static methods

// Object.keys()
// The Object.keys() method returns an array of a given object's own enumerable property names,
// in the same order as we get with a normal loop.

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));

let name = "John";

console.log(Object.keys(name)); // []

// Object.entries()
// The Object.entries() method returns an array of a given object's own enumerable
// string-keyed property [key, value] pairs.

const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));
