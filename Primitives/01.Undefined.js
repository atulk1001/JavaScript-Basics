// The undefined global property represents the primitive value undefined
// undefined is a property of the global object. That is, it is a variable in global scope.
let x;
if (x === undefined) {
  console.log("x is undefined");
} else {
  console.log("x is defined");
}

// difference between null and undefined

typeof null; // Object
typeof undefined; // undefined
null === undefined; // false
null == undefined; // true

1 + null; // 1
1 + undefined; // NaN
