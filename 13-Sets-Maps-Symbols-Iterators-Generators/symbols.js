console.info("---Symbols---");
// Symbols are unique and immutable data types introduced in ES6.
// They are often used to create unique identifiers for object properties.
const symbol1 = Symbol('description');
const symbol2 = Symbol('description');
console.log(symbol1 === symbol2); // false, each symbol is unique
const obj = {
  [symbol1]: 'value1'
};
obj[symbol2] = 'value2'; // Adding another symbol property
console.log(obj[symbol1]); // value1
console.log(obj); // value2