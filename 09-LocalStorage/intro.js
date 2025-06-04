// Add elements to the local storage
localStorage.setItem('name', 'David');
sessionStorage.setItem('name', 'Alex');

// Send an object to the local storage
// Note: Objects must be stringified before storing in localStorage
const product = {
    id: 1,
    name: 'Laptop',
    price: 999.99
}

const productJSON = JSON.stringify(product);
localStorage.setItem('product', productJSON);
// Send an array to the local storage
const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 }
];
const productsJSON = JSON.stringify(products);
localStorage.setItem('products', productsJSON);


// Retrieve data from local storage
const name2 = localStorage.getItem('name');
let productFromStorage = JSON.parse(localStorage.getItem('product')); // Parse the JSON string back to an object
let productsFromStorage = JSON.parse(localStorage.getItem('products')); // Parse the JSON string back to an array
console.log(name2); // Output: David
console.log(productFromStorage); // Output: {"id":1,"name":"Laptop","price":999.99}
console.log(productsFromStorage); // Output: [{"id":1,"name":"Laptop","price":999.99},{"id":2,"name":"Smartphone","price":499.99}]


// Remove an item from local storage
localStorage.removeItem('name'); // Removes the 'name' item from local storage

// Clear all items from local storage
localStorage.clear(); // Clears all items from local storage