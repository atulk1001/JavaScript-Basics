// Javascript array are resizable
// Javascript array may conatins mixed data types
// Javascript Arrays are zero indexed
// JavaScript array-copy operations create shallow copies.

let arr = [1, 2, "Hi", 2.5, null, undefined, NaN, { name: "Rao" }];
console.log(`arr `, arr);

console.log(arr[0]); // first element
console.log(arr[arr.length - 1]); // last element

// add element to last

arr[arr.length] = "last";

console.log(arr);
