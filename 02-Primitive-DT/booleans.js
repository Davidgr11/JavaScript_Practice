console.info("----------booleans.js (explanation)");

console.log(Boolean("Hello")); // true (non-empty string)
console.log(Boolean("")); // false (empty string)
console.log(Boolean(0)); // false (zero is falsy)
console.log(Boolean(1)); // true (any non-zero number)
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// Double Negation Trick
console.log(!!"JavaScript"); // true (quick way to convert to boolean)
