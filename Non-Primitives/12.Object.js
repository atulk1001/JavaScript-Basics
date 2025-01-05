// Object.freeze is used to prevent the modification of the object.
// Object.freeze only works at the first level of the object.

let user = { name: "John", age: 30 };
Object.freeze(user);

// we cannot add new properties

user.isAdmin = true;
user.age = 35;

let employee = {
  name: "Atul",
  age: 30,
  address: { city: "HYD", state: "TELANGANA", pincode: "502032" },
};

Object.freeze(employee);

employee.age = 35;
employee.address.city = "Warangal";
console.log(employee);
// { name: 'Atul', age: 30, address: { city: 'Warangal', state: 'TELANGANA', pincode: '502032' } }
