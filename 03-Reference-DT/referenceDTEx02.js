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



console.info("Exercise 9: Company Employee Analysis");
/*
Given a list of employees:
- Calculate the average salary.
- Find the employee with the highest salary.
- Return an array of employee names who earn more than $60,000.
*/
const employees = [
    { name: "Ana", salary: 55000 },
    { name: "Luis", salary: 72000 },
    { name: "Carlos", salary: 81000 },
    { name: "Maria", salary: 46000 },
    { name: "Elena", salary: 92000 },
];

// Average salary
const averageSalary = employees.reduce((acc, emp) => acc + emp.salary, 0) / employees.length;
console.log("Average salary:", averageSalary);
// Highest salary
const highestPaid = employees.reduce((top, emp) => emp.salary > top.salary ? emp : top);
console.log(`Highest paid employee: ${highestPaid.name} ($${highestPaid.salary})`);
// Employees earning over 60K
const overSixty = employees.filter(emp => emp.salary > 60000).map(emp => emp.name);
console.log("Employees earning over $60,000:", overSixty);




console.info("Exercise 10: Inventory System with Grouping");
/*
Given a list of inventory items:
- Add a new item using the spread operator.
- Count how many items are in stock vs out of stock.
- Group all items by category (e.g., 'Electronics', 'Books').
*/

const inventory = [
    { name: "Laptop", inStock: true, category: "Electronics" },
    { name: "TV", inStock: false, category: "Electronics" },
    { name: "Notebook", inStock: true, category: "Books" },
    { name: "Smartphone", inStock: true, category: "Electronics" },
    { name: "Biography", inStock: false, category: "Books" },
];

// Adding a new item using the spread operator
const newInventory = [...inventory, { name: "Headphones", inStock: true, category: "Electronics" }]; //with spread operator
newInventory.push({ name: "Cookbook", inStock: true, category: "Books" }); // with push method
console.log("Updated Inventory:", newInventory);

const stockCount = newInventory.reduce((acc, item) => {
    item.inStock ? acc.inStock++ : acc.outOfStock++; 
    return acc;
}, { inStock: 0, outOfStock: 0 });
console.log(`Stock Count: In Stock - ${stockCount.inStock}, Out of Stock - ${stockCount.outOfStock}`);

const grouped = newInventory.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item.name);
    return acc;
}, {});
console.log("Grouped by category:", grouped);


/*
Claves:
array.reduce((acumulador, elementoActual) => {
    // hacer algo con acumulador y elementoActual
    return acumulador;
}, valorInicial);

- ¿Qué estás acumulando? eso define la estructura del acumulador.

acc[prop] = (acc[prop] || 0) + 1;
- si no existe una propiedad en el objeto acc, se inicializa a 0, y luego se le suma 1.

acc[prop] = acc[prop] || [];
acc[prop].push(valor);
- si no existe un array en el objeto acc, se inicializa como un array vacío, y luego se le agrega un valor.
*/