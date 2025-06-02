// Query Selector returns the first element that matches the selector
console.info("--4 querySelector--");

const card = document.querySelector(".card");
console.log(card);

// Handle the selection using the structure of the document
const secondCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(secondCard);

const form = document.querySelector("#formulario");
console.log(form);

const nav = document.querySelector("nav");
console.log(nav);