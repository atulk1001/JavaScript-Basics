// Deep Copy of Objects
// To create a deep copy of an object, you can use the JSON.parse() and JSON.stringify() methods.

let user1 = { name: "John", dob: "01-01-1990" };
let user2 = JSON.parse(JSON.stringify(user1));
user2.name = "Jane";
user2.dob = "02-02-1990";

console.log(user1); // { name: 'John', dob: '01-01-1990' }
console.log(user2); // { name: 'Jane', dob: '02-02-1990' }

let user3 = {
  name: "John",
  dob: "01-01-1990",
  address: {
    street: "123 Main St",
    city: "New York",
  },
};
let user4 = JSON.parse(JSON.stringify(user3));
user4.address.city = "Los Angeles";

console.log(user3); // { name: 'John', dob: '01-01-1990', address: { street: '123 Main St', city: 'San Francisco' } }
