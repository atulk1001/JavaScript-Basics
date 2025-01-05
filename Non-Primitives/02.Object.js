// Accessing an object property which does not exist will return undefined.

let user = { name: "John", age: 30 };
user.address; // undefined

// The in operator can be used to check if a property exists in an object.

if ("address" in user) {
  console.log(user.address);
} else {
  console.log("Address does not exist");
}
// Address does not exist

// The for...in loop can be used to iterate over the properties of an object.

for (let key in user) {
  console.log(key, user[key]);
}
// name John
// age 30
