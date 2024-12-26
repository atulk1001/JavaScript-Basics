// At the top level of programs and functions, let, unlike var,
// does not create a property on the global object
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
