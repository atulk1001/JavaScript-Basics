// create a prototype method on the String object that will reverse a string`

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

const earth = "universe";
let res = earth.reverse();
console.log(res); // esrevinu
