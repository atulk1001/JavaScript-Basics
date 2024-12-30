// Symbol is a primitive data type in JavaScript.
// It is used to create unique identifiers for objects.

let user = {
  name: "John",
};

let id = Symbol("id");
let id2 = Symbol("id");

// two symbols with the same description are different values
id === id2; // false

user[id2] = 2;
user[id] = 1;

console.log(user); // { name: 'John', [Symbol(id)]: 1, [Symbol(id)]: 2 }

// We can not use dot notation to access the symbol property

console.log(user.id); // undefined
