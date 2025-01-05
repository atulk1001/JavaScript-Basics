// Two objects are same only if they reference the same memory location.

let o1 = { name: "John" };
let o2 = { name: "John" };

o1 === o2; // false because o1 and o2 are pointing to different memory locations

let o3 = o1;
o1 === o3; // true because o3 is pointing to the same memory location as o1
