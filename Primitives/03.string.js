// string properties

// length property returns the length of the string.

let str = "Hello World";
console.log(str.length); // 11

// Methods
// The String object has a number of methods that allow you to manipulate strings.
// charAt(): Returns the character at the specified index (position) in a string.

// charCodeAt(): Returns the Unicode of the character at the specified index in a string.
let str2 = "JavaScript";
console.log(str2.charCodeAt(0)); // 74

// includes(): Determines whether a string contains the specified value.
let str3 = "Welcome to JavaScript";
console.log(str3.includes("JavaScript")); // true
console.log(str3.includes("t")); // true
console.log(str3.includes("X")); // false

// endsWith(): Determines whether a string ends with the specified value.
console.log(str3.endsWith("Script")); // true

// startsWith(): Determines whether a string starts with the specified value.
console.log(str3.startsWith("Welcome")); // true

// repeat(): Returns a new string with a specified number of copies of an existing string.
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'

// searchParams(): Returns a URLSearchParams object containing the query parameters of a URL.
// concat(): Joins two or more strings and returns a new string.
// indexOf(): Returns the index of the first occurrence of a specified value in a string.
// lastIndexOf(): Returns the index of the last occurrence of a specified value in a string.
// match(): Searches a string for a match against a regular expression and returns the matches.
// replace(): Searches a string for a specified value or a regular expression and replaces it with a new value.
// search(): Searches a string for a specified value or a regular expression and returns the position of the match.
// slice(): Extracts a part of a string and returns a new string.
// split(): Splits a string into an array of substrings.
// substr(): Extracts the characters from a string, beginning at a specified start position, and through the specified number of character.
// substring(): Extracts the characters from a string between two specified indices.
// toLowerCase(): Converts a string to lowercase letters.
// toUpperCase(): Converts a string to uppercase letters.
// trim(): Removes whitespace from both ends of a string.
// valueOf(): Returns the primitive value of a String object.
