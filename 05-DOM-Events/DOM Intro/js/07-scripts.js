// Traversing the DOM
console.info("--7 Traversing--");

const nav1 = document.querySelector('.navegacion');
console.log(nav1.children);
console.log(nav1.children[0].nodeName); // returns the name of the node
console.log(nav1.children[0].nodeType); // returns the type of the node
// 1 = Element, 2 = Attribute, 3 = Text, 4 = Comment, 5 = Document

const card1 = document.querySelector('.card');
card1.children[0].src= 'img/hacer3.jpg';
console.log(card1.children); // returns the children of the card

console.log(card1.parentElement.className); // returns the parent element of the card
console.log(card1.nextElementSibling); // returns the next sibling element of the card
console.log(card1.previousElementSibling); // returns the previous sibling element of the card
