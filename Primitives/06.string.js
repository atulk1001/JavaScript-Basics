// split(): Splits a string into an array of substrings.

let str = "Hello World";
let words = str.split(" ");
console.log(words); // [ 'Hello', 'World' ]

let lang = "JavaScript";
let chars = lang.split("");
console.log(chars); // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]

// concat(): Combines two or more strings and returns a new string.

let str1 = `Hello`;
let str2 = `World`;

let greeting = str1.concat(" ", str2); // Hello World

let wordsArr = ["Hello", "World"];
let sentence = "".concat(...wordsArr);
console.log(sentence); // HelloWorld

let num1 = "10";
let num2 = 20;
console.log(num1.concat(num2)); // 1020
