console.info("Variables.js (explanation)");
// VARIABLES

/*
"VAR"
- Function-scoped (it's only available inside the function)
- Not used in modern JavaScript
*/
var firstName = "Jason";
var price = 25.5;

console.log(firstName, price); //output (jason 25.5)


/*
"LET"
- Block-scopped
- Can be reassigned
*/
let product = "TV"
let units = 20;

product = "Phone";
units = 50;

console.log(product, units); //output(Phone, 50)


/*
"CONST"
- Block-scoped
- Cannot be reassigned
*/
const pi = 3.1416;
console.log(pi); //output(3.1416)

pi = 5;
console.log(pi); //output(error)

/*
Best Practices:
- Use const when the value should not change.
- Use let when you need to reassign the value.
- Avoid using var unless necessary.
- Use meaningful variable names.
*/