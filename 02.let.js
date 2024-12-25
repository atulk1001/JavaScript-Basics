// let has block scope
{
  let y = 10; // local variable
  console.log(y); // 10
}
console.log(y); // ReferenceError y is not defined

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // ReferenceError i is not defined
