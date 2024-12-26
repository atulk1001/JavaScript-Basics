// Statc methods of Number object
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(10)); // true
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN("Hii")); // false
console.log(Number.isNaN(2)); // false

console.log(Number.parseFloat(true)); // NaN
console.log(Number.parseFloat(2)); //2
console.log(Number.parseFloat("200.80")); // 200.8
console.log(Number.parseFloat("0.80")); // 0.8
console.log(Number.parseFloat("012")); // 12
