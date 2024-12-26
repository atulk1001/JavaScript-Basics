/*
 * Strict mode helps catch common coding errors and "unsafe" actions
 * such as defining global variables unintentionally.
 */
"use strict";
x = 30;
console.log(x); // ReferenceError: x is not defined
