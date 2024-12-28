//The String object is used to represent and manipulate a sequence of characters
//Strings are immutable, which means that once they are created, their values cannot be changed.

//Strings can be created as primitives, from string literals, or as objects, using the String()

//String literals

let str = "Hello";
let str2 = "World";

//String objects
let str3 = new String("Hello World");
console.log(str3); // [String: 'Hello World']
console.log(typeof String()); // string
console.log(typeof new String()); //object

// String immutability
let name = "Ravi";
name[0] = "K";
console.log(name); // Ravi
//The above code will not change the value of the string name to "Kavi" because strings are immutable

//String length

let course = "MCA";
course.length = 30;
console.log(course);
console.log(course.length); //3
