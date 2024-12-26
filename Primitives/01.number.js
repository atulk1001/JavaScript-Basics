//The Number constructor contains constants and methods for working with numbers
// Numbers can be represnted in different notations
// like decimal, hexadecimal, octal and binary

let num = 100;
console.log(typeof num); // number
let price = 20.3;
console.log(typeof price); // number

//255 and 255.0 are same

console.log(255 === 255.0); // true
console.log(255 === 255.005); // false
console.log(255 === 0xff); // true (hexadecimal notation)
console.log(255 === 0b11111111); // true (binary notation)
console.log(255 === 0.255e3); // true (decimal exponential notation)
