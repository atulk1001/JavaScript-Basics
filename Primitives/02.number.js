//When used as a function, Number(value) converts a string or other value to the Number type.
// If the value can't be converted, it returns NaN.

let score = "100";
typeof score; // string
score = Number(score);
typeof score; // number
