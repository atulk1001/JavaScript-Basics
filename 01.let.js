// The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value

let x = 10;
x = 30;
console.log(x); // 30

// We can access let variables only after they are declared

age = 35;
let age; //ReferenceError: Cannot access 'age' before initialization

let name1,
  name2 = "Yash";

console.log(name1); // undefined
console.log(name2); // Yash
