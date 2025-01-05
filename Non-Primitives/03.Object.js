// Object Comparison
// Two objects are equal only if they are the same object.
// There is no way to compare objects for equality in JavaScript.

let user1 = { name: "John" };
let user2 = { name: "John" };

if (user1 === user2) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}
