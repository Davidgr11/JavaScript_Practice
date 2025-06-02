// Generate HTML
console.log("--10 Add a card to the container--");

const p1 = document.createElement('p'); // create a new paragraph element
p1.textContent = 'Concierto'; // set the text content of the paragraph
p1.classList.add('categoria', 'concierto'); // add classes to the paragraph

const p2 = document.createElement('p'); // create a new paragraph element
p2.textContent = 'Concierto de Rock'; // set the text content of the paragraph
p2.classList.add('titulo'); // add classes to the paragraph

const p3 = document.createElement('p'); // create a new paragraph element
p3.textContent = '$800 por persona'; // set the text content of the paragraph
p3.classList.add('precio'); // add classes to the paragraph

const info = document.createElement('div'); // create a new div element
info.classList.add('info'); // add classes to the div
info.appendChild(p1); // append the first paragraph to the div
info.appendChild(p2); // append the second paragraph to the div
info.appendChild(p3); // append the third paragraph to the div
console.log(info); // log the div to the console

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'; // set the src attribute of the image
imagen.alt = 'Texto alternativo'; // set the alt attribute of the image


const cardNew = document.createElement('div');
cardNew.classList.add('card'); // add classes to the card
cardNew.appendChild(imagen); // append the image to the card
cardNew.appendChild(info); // append the info div to the card

console.log(cardNew); // log the card to the console

const contenedor = document.querySelector('.hacer .contenedor-cards'); // select the container element
contenedor.appendChild(cardNew); // append the new card to the container