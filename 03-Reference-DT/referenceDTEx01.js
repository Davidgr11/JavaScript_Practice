console.info("Exercise 1: Object Manipulation");
/*
-Create an object representing a movie with title, director, and year.
-Add a ratings array.
-Merge it with another object containing genre and boxOffice.
-Freeze the object and try modifying it.
-Convert the object into an array of [key, value] pairs.
*/
let movie = {
    title : "SpiderMan",
    director : "Stan Lee",
    year : "2001"
}

movie.ratings = [5, 5, 4.6, 3.7, 4.2, 5];
console.log(movie);
let extraMovieInfo = {genre: "Action", boxOffice: "Warner"};
let movie2 = {...movie, ...extraMovieInfo};
console.log(movie2)
Object.freeze(movie2);
movie2.year = 3000;//wil not change
console.log(movie2);
console.log(Object.entries(movie2));



console.info("Exercise 2: Array Methods");
/*
-Create an array of numbers [5, 10, 15, 20, 25, 30]
-Multiply each number by 3 using map().
-Filter numbers greater than 20.
-Find the first number greater than 25.
-Sum all numbers using reduce().
-Check if at least one number is even using some().
-Remove duplicates from [1, 2, 2, 3, 4, 4, 5].
*/
let numbersArray = [5,10,15,20,25,30];
console.log(numbersArray.map(num => num * 3));
console.log(numbersArray.filter(num => num > 20));
console.log(numbersArray.find(num => num > 25));
console.log(numbersArray.reduce((acc, num) => acc + num, 0));
console.log(numbersArray.some(num => num % 2 === 0));
let duplicatesArray = [1,2,2,3,4,4,5];
let newArray = [...new Set(duplicatesArray)];
console.log(newArray);
// Concat numbers array and new array
const finalArray1 = numbersArray.concat(newArray, "Other");
console.log(`Concat: ${finalArray1}`);
const finalArray2 = [...numbersArray,...newArray, "Other"];
console.log(`Concat2: ${finalArray2}`);


console.info("Exercise 3: Functions");
/*
-Write a curried function that takes three parameters (length, width, height) and returns the volume of a box.
-Use function composition to:
-Add 5 to a number.
-Multiply it by 2.
*/
let curried3 = (a) => (b) => (c) => a*b*c;
console.log(curried3(2)(3)(10));//60
let adding5 = (num) => num +=5;
let multiply2 = (num) => num * 2;
let composition = (a,b) => (x) => a(b(x));
let resultCompose = composition (multiply2, adding5);
console.log(resultCompose(10))//30


console.info("Exercise 4: Advanced Objects");
/*
-Create a library object with:
name, location, books (array of objects), getTotalBooks().
-Each book should have title, author, yearPublished.
-Implement an arrow function getTotalBooks() that counts books.
-Add a method findLatestBook() that returns the most recent book.
*/
let library = {
    name : "EBC",
    location : "CDMX",
    books : [
        {title: "English A1", author: "author elementary", yearPublished: 2000}, 
        {title: "English B1", author: "author intermediate", yearPublished: 2005}, 
        {title: "English C1", author: "author advanced", yearPublished: 2010}],
    getTotalBooks:function (){
        return `Total books: ${this.books.length}`;// how many elements are in the array
    },
    /*findLatestBook: function () {
        return this.books.reduce((latest, book) => {
            if (book.yearPublished > latest.yearPublished) {
                return book;
            } else {
                return latest;
            }
        });
    }*/
    findLatestBook: function () {
        let latestBook = this.books.reduce((latest, book) =>// in books we use 2 temporary variables
            book.yearPublished > latest.yearPublished ? book : latest
        );
        return `Latest book: ${latestBook.title}`;
    }
    //2005>2000 YES, 2010>2005 YES, undefined>2010 NO => latest (3 element)
}
console.log(library.getTotalBooks());
console.log(library.findLatestBook());

console.info("Exercise 5: Advanced Arrays and Functions");

/*
Given an array of students:
Sort students by score in descending order.
Get the top 2 students.
Compute the average score.
Return an array of names of students who scored above 80.
*/ 
let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 80 }
];
// Fix: Sort students by score in descending order
students.sort((a, b) => b.score - a.score); // 2 temp variables (75<85)(90<75 C)(80<75 C)(90<85 C)
console.log("Sorted students:", students);

// Fix: Get top 2 students
console.log("Top 2 students:", students.slice(0, 2)); // first 2 elements

// Fix: Filter students who scored above 80
console.log("Above 80:", students.filter(student => student.score > 80).map(student => student.name));
// filter to get the ones above 80 and then we create a new array just with the names

// Fix: Compute average score
const average = students.reduce((sum, student) => sum + student.score, 0) / students.length;
// accumulate every score and then divide it into the number of students
console.log("Average score:", average); // 82.5


console.info("Exercise Spread Operator");
const cart = [
    {name: "TV", price:200},
    {name: "Phone", price:500},
    {name: "Mirror", price:70},
    {name: "Book", price:50},
];

const newItem = {name: "Earphones", price:180};
const cart2 = [...cart, newItem];
console.log(cart2);