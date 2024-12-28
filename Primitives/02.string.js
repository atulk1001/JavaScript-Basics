//Character access
// Strings can be accessed using array-like syntax. The first character is at position 0,
// the second character is at position 1, and so on.

let str = "Hello World";
console.log(str.charAt()); // H
console.log(str.charAt(0)); // H
console.log(str.charAt(6)); // W
console.log(str.charAt(20)); // empty string

console.log(str[3]);
console.log(str[-2]); //undefined
console.log(str[20]); // undefined

console.log("2+2");
console.log("2" + "2");

//String comparison
//Strings can be compared using the comparison operators (>, <, <=, >=, ==, !=, ===, !==).
//The comparison is done based on the Unicode value of the characters in the string.

"a" < "b"; // true
"a" > "b"; // false
"a" === "A"; // false
"2" == 2; // true
"2" === 2; // false

//String concatenation
//Strings can be concatenated using the + operator.

let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2); // Hello World

let n1 = 10;
let n2 = "20";
console.log(n1 + n2); // 1020

let n3 = 10;
let n4 = "20";
let n5 = 30;

console.log(n3 + n4 + n5); // 102030
console.log(n3 + n5 + n4); // 4020
