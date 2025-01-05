// Assigning object to a variable

let user1 = { name: "John", dob: "01-01-1990" };
let user2 = user1;

// `user1` and `user2` are pointing to the same object

user1.adress = "123 Main St";

console.log(user1); // { name: 'John', dob: '01-01-1990', adress: '123 Main St' }`
console.log(user2); // { name: 'John', dob: '01-01-1990', adress: '123 Main St' }

user2.name = "Jane";
console.log(user1); // { name: 'Jane', dob: '01-01-1990', adress: '123 Main St' }

delete user2.adress;

console.log(user1); // { name: 'Jane', dob: '01-01-1990' }
console.log(user2); // { name: 'Jane', dob: '01-01-1990' }
