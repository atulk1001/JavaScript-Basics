// Shallow Copy of a flat array

let movies = ["Lagan", "Akrosh", "DDLJ"];

let newMovies = [...movies]; // True Copy

newMovies.push("Krish3");

console.log(movies);

console.log(newMovies);

// Copy of nested Array : Shallow Copy

let games = ["Baseball", "Hockey", ["Cricket", "IPL"], "Chess"];

let newGames = [...games];

newGames[0] = "Restling";

newGames[2][1] = "One Day";

console.log(newGames); // [ 'Restling', 'Hockey', [ 'Cricket', 'One Day' ], 'Chess' ]
console.log(games); // [ 'Baseball', 'Hockey', [ 'Cricket', 'One Day' ], 'Chess' ]
