//Instance methods

// toFixed(digits) , it rounds up the number to the given number of digits

const numObj = 12345.6789;
console.log(numObj.toFixed()); // 12346
console.log(numObj.toFixed(1)); // 12345.7
console.log(numObj.toFixed(7)); // 12345.7

const rank = 1;
console.log(rank.toFixed(1)); // 1.0
console.log(rank.toFixed()); // 1
console.log(rank.toFixed(5)); // 1.00000

// Number.prototype.toString() , it converts the number to string

const num = 15;
console.log(num.toString()); // "15"
const num2 = undefined;
console.log(num2.toString()); // cannot read property toString of undefined
const num3 = null;
console.log(num3.toString()); // cannot read property toString of null
