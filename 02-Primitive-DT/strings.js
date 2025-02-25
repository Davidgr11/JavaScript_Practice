console.info("----------strings.js (explanation)");
// STRINGS
const myName = "Jason";
let product = "Phone"
console.log(myName, product);

// Lenght Method (number)
let myNameLenght = myName.length;
console.log(myNameLenght); // number of characters

// Includes Method (boolean)
let myNameIncludes = myName.includes("son");// sensitive Aa
console.log(myNameIncludes);

// Concat Method (string) [+, `${}`]
const my2Name = "Mahomes";
let fullName = myName + " " + my2Name;//.concat("") or , also can be used
let fullNameReverse = `${my2Name} ${myName}`;
console.log(fullName, fullNameReverse);

// Trim spaces (always recommended in user inputs)
let mailExample = "james@mail.com   "
console.log(mailExample.trimStart().trimEnd().trim());

// Replace Method
fullName = fullName.replace("Jason", "Marcus");
console.log(fullName);

// Cut || Selection Methods
console.log(fullName.length);
console.log(fullName.slice(0,10));// range
console.log(fullName.substring(2,0)); //range
console.log(fullName.charAt(0));
console.log(fullName.indexOf("ah"));

// Repeat Method
console.log(fullName.repeat(3));

// Split Method
let hobbies = "Read, Cook, Play Soccer, Listen Music";
console.log(hobbies.split(", ")); //like and array

// Upper / Lower Case Method
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());