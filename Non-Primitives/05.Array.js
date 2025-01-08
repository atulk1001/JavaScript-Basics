// Deep Copy or Deep Clone

let skills = ["Java", ".Net", ["JS", "JQuery"]];

let newSkills = JSON.parse(JSON.stringify(skills));

newSkills[2][0] = "JavaScript";

console.log(newSkills); // [ 'Java', '.Net', [ 'JavaScript', 'JQuery' ] ]

console.log(skills); // [ 'Java', '.Net', [ 'JS', 'JQuery' ] ]
