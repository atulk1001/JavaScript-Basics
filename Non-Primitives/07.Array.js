// create custom Array with Array.prototype.constructor
Array.prototype.cleanArray = function () {
  return this.filter((ele) => {
    if (ele !== null && ele !== undefined) {
      return true;
    } else {
      return false;
    }
  });
};

let arr = [1, 2, 3, null, undefined];
let cleanedArr = arr.cleanArray();
console.log(cleanedArr);
