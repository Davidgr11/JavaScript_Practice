// Reference Data Types Exercises Part 2

/*
Remebering:
.reduce() is a powerful method used to accumulate values or summarize an array into a single result
*/

console.info("Exercise 6: Reduce Sum Array Numbers");

let numbersExample = [1,2,3,4,5];

let resultExample = numbersExample.reduce((acc, num) => acc + num, 0);
// the accumulator will be adding the value of each number (acc starts in 0) then returns (1)(3)(6)(10)(15)
console.log(resultExample); // 15



console.info("Exercise 7: Practicing reduce method");
/*
Given an array of products:
Find the most expensive product using .reduce().
Return its name and price.
*/
let products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 },
    { name: "Monitor", price: 300 }
];

let expensiveProduct = products.reduce((expensive, product) => product.price > expensive.price ? product : expensive);
console.log(`The most expensive product is "${expensiveProduct.name}" with a price of $${expensiveProduct.price}`);



console.info("Exercise 8: Array and Objects practice");
/*
Given a list of movies with ratings:
Calculate the average rating of each movie.
Find the highest-rated movie.
*/
let movies = [
    { title: "Inception", ratings: [4.5, 5, 5, 4.7] },
    { title: "Avengers", ratings: [4.2, 4.3, 4.5, 4.1] },
    { title: "Interstellar", ratings: [4.8, 5, 5, 4.9] }
];

// Average .reduce()
movies.forEach((movie) => {
    let totalMovieRating = movie.ratings.reduce((acc, num) => acc + num, 0);
    movie.averageRatings = totalMovieRating / movie.ratings.length; // adding a property to each object
});

console.log(movies.map((movie) => movie.averageRatings));
let hightRatedMovie = movies.reduce(((highest, movie) => movie.averageRatings > highest.averageRatings ? movie : highest));
console.log(`The highest rated movie is ${hightRatedMovie.title}`);