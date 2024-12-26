//object properties may be changed or added, but the object itself can't be re-assigned.

const profile = {
  name: "Atul",
  email: "atul.v@aol.com",
  age: 25,
  location: "Bangalore",
  country: "India",
  dob: "1996-02-02",
};

// below line will throw error
try {
  profile = {
    name: "Ravi",
    email: "ravi.v@aol.com",
    age: 35,
    location: "Bangalore",
    country: "India",
    dob: "1989-02-02",
  };
} catch (error) {
  console.log("Error:", error);
}
// TypeError: Assignment to constant variable.

// Below is fine because we are not doing assignment to profile, we are updating the property of profile object

profile.name = "Shyam";
profile.education = "B.Tech";

console.log(profile);
