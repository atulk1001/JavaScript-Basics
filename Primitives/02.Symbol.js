/* Symbols in JavaScript are unique and immutable data types 
Symbols can be used as keys for object properties.
Symbols are not enumerable by default, 
which means Symbols won't show up in a for...in loop or Object.keys() method */

let user = {
  name: "John",
  id: 1,
};
let panNo = Symbol("panNo");
let AadharNo = Symbol("AadharNo");
user[panNo] = "123456789";
user[AadharNo] = "23213128931";

console.log(user);

console.log(Object.keys(user)); // ["name", "id"]

for (u in user) {
  console.log(user[u]);
  // Symbol(panNo) and Symbol(AadharNo) are not printed
  // here because they are not enumerable
}
