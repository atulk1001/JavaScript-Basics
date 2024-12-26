// Scope of let is limited to block
// var is not blocked scoped
// Scope of var is till the end of enclosed function

function varTest() {
  var x = 1;
  {
    var x = 2; // same variable!
    console.log(x);
  }
  console.log(x);
}
varTest(); // 2 2
function letTest() {
  let x = 1;
  {
    let x = 2; // different variable
    console.log(x);
  }
  console.log(x);
}

letTest(); // 2 1
