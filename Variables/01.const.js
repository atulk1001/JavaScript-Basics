// The const declaration declares block-scoped local variables.
// The value of a constant can't be changed through reassignment
// if a constant is an object, its properties can be added, updated, or removed.

// const is a signal that the identifier won’t be reassigned

const matchScore = 100;
matchScore = 200; // TypeError: Assignment to constant variable.

// We can redeclare a const variable within a different scope, not in the same scope.
function constTest() {
  const x = 1;
  {
    const x = 2; // different variable
    console.log(x);
  }
  console.log(x);
}
constTest(); // 2 1
