/* indexOf method returns the index of the first occurrence of a specified value in
 a string
 The index of the first occurrence of searchString found, or -1 if not found. */

"Blue Whale".indexOf("blue"); // -1
"Blue Whale".indexOf("Blue"); // 0

// lastIndexof method returns the index of the last occurrence of a specified value in a string

const anyString = "Brave, Brave New World";

console.log(anyString.indexOf("Brave")); // 0
console.log(anyString.lastIndexOf("Brave")); // 7

// Find all occurrences of a substring in a string

const str = "To be, or not to be, that is the question.";
let count = 0;
let position = str.indexOf("e"); // 4
while (position !== -1) {
  count++;
  position = str.indexOf("e", position + 1);
}

console.log(count); // 4
