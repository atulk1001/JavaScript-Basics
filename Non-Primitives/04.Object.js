// Object.prototype.constructor
// The constructor property returns a reference to the Object constructor function that created the instance object.

let obj1 = {};
console.log(obj1.constructor);

let obj2 = new Object();
console.log(obj2.constructor);

function Tree(name) {
  this.name = name;
}

const theTree = new Tree("Redwood");
console.log("theTree is an object", typeof theTree);
console.log(`theTree.constructor is ${theTree.constructor}`);

// constructor property can be used to create new objects of the same type

// we can override the constructor property of an object
let user = { name: "John" };
console.log(user instanceof Object); // true
user.constructor = String;
console.log(user instanceof String); // false
console.log(`user.constructor is ${user.constructor}`);
console.log(`user is ${user.name}`);
