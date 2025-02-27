console.info("---ARRAYS---")

// Access to information
console.info("*Access to information*")
const months = ["January", "February", "March", "April", "May"];
console.table(months); // table presentation
console.log(months[0]); // first position
console.log(months.length);
for (let i=0; i<months.length; i++){ // goes from 0 to 4
    console.log(months[i]);
}
months.forEach( function(month){
    console.log(`Month: ${month}`);
})

// Common Operation Methods
// Start (+)unshift (-)shift
// End (+)push (-)pop
console.info("*Operations*")
let languages = ["JavaScript", "Python", "C"];
let numbers = [1,2,3,4,5,6,7,8,9];
console.log(`Original [${languages}]`);

languages.push("SQL"); // ADD last
console.log(`Push [${languages}]`);

languages.pop(); // DELETE last
console.log(`Pop [${languages}]`);

languages.unshift("SQL"); // ADD first
console.log(`Unshift [${languages}]`);

languages.shift(); // DELETE first
console.log(`Shift [${languages}]`);


// Searching Method
console.info("*Searching*")
console.log(languages.indexOf("C")); // 2
console.log(numbers.indexOf(5)); // 4
console.log(numbers.findIndex(num => num > 5)); // because it's the 6
console.log(languages.includes("C++"));
console.log(numbers.includes(4));
console.log(numbers.find(num => num > 4));// 5 -> returns the first match

// Transforming Information
console.info("*Mapping and Filtering*");
console.log(languages.map(lang => lang.toUpperCase()));//string method
console.log(numbers.map(num => num * 2));
console.log(languages.filter(lang => lang.length >6)); // based on characters
console.log(numbers.filter(num => num > 5));

// Sorting ASC and DES
console.info("*Sorting*")
console.log(languages.sort())
console.log(languages.reverse());
console.log(numbers.reverse());

// Reducing, Flattering and Duplicates
console.info("*Reducing, Flattering and Duplicates*");
console.log(numbers.reduce((acc, num) => acc + num, 0))
let nestedArray = [[1,2], [3,4], [5,6]];
console.log(nestedArray.flat());
let duplicates = [1,2,2,3,4,4,5,6,6,6];
console.log(`Elimitating duplicates ${[...new Set(duplicates)]}`);

// Validation
console.info("*Some and every*")
console.log(numbers.some(num => num > 9));
console.log(numbers.every(num => num > 0));

// Destructuring
console.info("Destructuring")
const numbers2 = [10,20,30,40,50];
const [ , two, ...rest] = numbers2; 
/*
    first (10) - skipped
    second (20) - two
    third, forth, fifth - rest
*/
console.log(two, rest);
