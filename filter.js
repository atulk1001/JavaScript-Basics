let arr = [1, 2, 4, 4, 3, 5, 6, 1];
let temp = [];
let result = arr.filter((item, index, arr) => {
  if (temp.includes(item)) {
    return false;
  } else {
    temp.push(item);
    return true;
  }
  //return temp;
});

console.log(result);
