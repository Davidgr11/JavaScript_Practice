// Modifying the DOM with JavaScript
console.info("--6 Modifying DOM elements--");
const heading = document.querySelector('.contenido-hero h1');
//heading.style.color = 'green'; // changes the text color
console.log(heading.textContent);
console.log(heading.innerText); // if it's visible on the page
console.log(heading.innerHTML);

heading.textContent = 'New Heading for the example of dom manipulation'; // changes the text content


const img = document.querySelector('.card img');
img.src = 'img/hacer2.jpg'; // changes the image source


// When modifying styles, it's better to add a class instead of modifying styles directly
heading.classList.add('heading--modificator'); // adds a new class