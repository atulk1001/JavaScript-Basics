// Shallow copy of an object
// Shadow copy is a copy of the object that only copies the properties of the object
// and not the objects themselves.

// Only the first level of the object is copied. Deeper levels are referenced

let employee = {
  name: "Atul",
  age: 30,
  address: { city: "HYD", state: "TELANGANA", pincode: "502032" },
};

let employeeCopy = { ...employee }; // Shallow copy
employeeCopy.name = "Ravi";

// original top level property in soruce object is remained unchanged

console.log(employee);
// { name: 'Atul', age: 30, address: { city: 'HYD', state: 'TELANGANA', pincode: '502032' } }
console.log(employeeCopy);

// original nested level property in soruce object is changed because ,
// copy of nested level considered as reference to the original object
employeeCopy.address.city = "Warangal";

console.log(employee);
// { name: 'Atul', age: 30, address: { city: 'Warangal', state: 'TELANGANA', pincode: '502032' } }

// Shallow copy of an object using Object.assign

let library = {
  books: [
    {
      count: 3,
      category: "fiction",
      list: ["book1", "book2", "book3"],
    },
  ],
};
