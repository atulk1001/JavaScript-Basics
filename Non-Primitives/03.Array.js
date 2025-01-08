// Different ways to create Array
// Array() constructor

let arr = new Array(); // creates empty array
let arr1 = new Array(2); // creates an array of size 2;
let arr2 = new Array(1, 4, 6, 8, 9);

// Array Literal

let arr3 = [];

// assigning an array to different variable is same array

let numbers = [1, 2, 3, 4, 5];
let numbersCopy = numbers;
numbersCopy.push(6);
console.log(numbers); //[1, 2, 3, 4, 5, 6]
