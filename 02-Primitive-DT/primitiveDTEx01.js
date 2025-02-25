console.info("----------specials.js (explanation)");

console.log("Exercise 1 Strings");
/*
Declare a string " Full Stack Developer " and:
Convert it to lowercase
Remove spaces
Check if it contains "Stack"
Replace "Full" with "Pro"
Convert to an array using " " as a separator
*/
let stringEx = " Full Stack Developer ";
stringEx = stringEx.toLowerCase().trim();
console.log(`Contains 'stack' = ${stringEx.includes("stack")}`);
stringEx = stringEx.replace("full", "pro").split(" ");
console.log("Final array:", stringEx);



console.log("Exercise 2 Numbers");
/*
Declare a number 4567.8912
Convert it to integer
Round it to two decimal places
Convert it to a string
Extract the integer from "99px"
*/
let number = 4567.8912;
let number2 = "99px";
console.log(typeof(number)); //number
integer = Math.floor(number);
console.log(integer); //number
console.log(number.toFixed(2));
console.log(number.toString());
console.log(parseInt(number2));


console.log("Exercise 3 Booleans")
/*
Convert these values into booleans: 0, 1, "JavaScript", "", [], {}
*/

console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean('JavaScript'):", Boolean("JavaScript")); // true
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean([]):", Boolean([])); // true
console.log("Boolean({}):", Boolean({})); // true

/*
Final Recommendations:
Use template literals (${} inside backticks ``) for cleaner logging.
Declare variables properly with let or const to avoid implicit globals.
Use Math functions (like Math.floor()) when converting to an integer.
Improve logging clarity with descriptive messages.
*/