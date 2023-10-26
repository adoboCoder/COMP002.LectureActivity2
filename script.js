// single-line comment
/*
 * this
 * is
 * a
 * multi-line
 * comment
 *
*/
console.log("Types examples:");
// boolean example
let variable1 = false;
console.log(variable1);

// null example
let variable2 = null;
console.log(variable2);

// undefined example
let variable3;
console.log(variable3);

// numbers
let variable4 = 25;
console.log(variable4);

let variable5 = 25.2222;
console.log(variable5);

let variable6 = 25.2e10;
console.log(variable6);

// strings
let variable7 = "Hello World!";
console.log(variable7);

/******************************/
// operators examples
console.log("**************************");
console.log("Operators examples:");
console.log("[value 1] [operator] [value 2]");
// addition
console.log(10 + 10); // 20

// subtraction
console.log(10 - 10); // 0

// multiplication
console.log(10 * 10); // 100

// division
console.log(10 / 10); // 1

// modulo - remainder
console.log(10 % 10); // 0

/******************************/

// automatic conversion examples
// javascript attempts to guess the correct type but it is not always correct
console.log("**************************");
console.log("Automatic conversion examples:");

console.log(8 * null); // 0
console.log("5" - 1); // 4
console.log("5" + 1); // 51
console.log("five" * 2); // NaN
console.log(false == 0); // true

/******************************/
// comparing values
console.log("**************************");
console.log("Comparing operators examples:");
console.log("[value 1] [comparison operator] [value 2]");
// equality-check (not checking for same type)
console.log("5" == 5); // true

// equality-check including types
console.log("5" === 5); // false

// not-equals
console.log(1 != 5); // true

// greater than
console.log(10 > 5); // true

// less than
console.log(10 < 5); // false

// greater than or equal to
console.log(5 >= 5); // true

// less than or equal to
console.log(5 <= 5); // true


/******************************/
// logical operators
console.log("**************************");
console.log("Logical operators examples:");
console.log("AND/OR - [statement 1] [logical operator] [statement 2]");

// and - both statements must be true to return true
console.log(1 == 1 && 5 >= 10); // false

// or - one of the statements must be true to return true
console.log(1 == 1 || 5 >= 10); // true

// ternary operator - shorthand for if-else
console.log("ternary - [statement] ? [value if true] : [value if false]");
console.log((10 > 5) ? 5 : 2); // 5


