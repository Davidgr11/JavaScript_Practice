console.info("----------specials.js (explanation)");


let bigNumber = 123456789012345678901234567890n; // BigInt (use 'n' at end)
console.log(bigNumber);
console.log(bigNumber + 10n); // Arithmetic with another BigInt

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); // false (Symbols are always unique)
