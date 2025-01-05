// objects are used to store keyed collections of various data and more complex entities
// An object can be created with figure brackets {…} with an optional list of properties.
// A property is a “key: value” pair, where key is a string (also called a “property name”),
// and value can be anything.

// Create an empty object

let user1 = {}; // Object literal
let user2 = new Object(); // Object constructor

// Object is a collection of key-value pairs

let user = {
  name: "John",
  age: 30,
};

// we can access the object properties using dot notation

user.name; // John
user.age; // 30

// we can also access the object properties using square brackets

user["name"]; // John

// we can add new properties to the object

user.isAdmin = true;

// we can update the existing properties

user.age = 35;

console.log(user); // { name: 'John', age: 35, isAdmin: true }

// we can delete the properties from the object

delete user.isAdmin;

console.log(user); // { name: 'John', age: 35 }
