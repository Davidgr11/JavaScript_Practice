// Variables
const cart = document.querySelector('#carrito'); // estructura del carrito
const courses = document.querySelector('#lista-cursos'); // lista de cursos disponibles
const cartContainer = document.querySelector('#lista-carrito tbody'); // contenedor del carrito
const clearCartBtn = document.querySelector('#vaciar-carrito'); // botón para vaciar el carrito
let cartItems = [];

// Load all event listeners
loadEventListeners();
function loadEventListeners() {
    courses.addEventListener('click', addCourse);
    cart.addEventListener('click', removeCourse);

    document.addEventListener('DOMContentLoaded', () => {
        cartItems = JSON.parse(localStorage.getItem('carrito')) || []; // get the cart items from localStorage or initialize as empty array
        renderCart(); // render the cart items on page load
    });

    clearCartBtn.addEventListener('click', (e) => {
        cartItems = []; // clear the cart items array
        renderCart(); // re-render the cart
    })
}

// Functions
function addCourse(e) {
    if(e.target.classList.contains('agregar-carrito')){ // check if we're clicking on the button to add a course
        //console.log(e.target);
        const course = e.target.parentElement.parentElement; // go to the parent element of the button to get the course data
        readCourseData(course);
    }
}

function removeCourse(e) {
    if(e.target.classList.contains('borrar-curso')){
        const courseId = e.target.getAttribute('data-id'); // get the id of the course to remove
        const moreThanOne = cartItems.some( item => item.id === courseId && item.cantidad > 1 ); // check if the course exists and has more than one quantity
        if(moreThanOne){
            cartItems = cartItems.map( item => {
                if(item.id === courseId){
                    item.cantidad--; // reduce the quantity of the course
                }
                return item; // return the item
            });
        } else{
            cartItems = cartItems.filter( item => item.id !== courseId ); // filter out the course with the id we want to remove
        }
        renderCart(); // re-render the cart
    }
}

function readCourseData(course) {
    // Create an object with the course data
    const infoCourse = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Check if the course is already in the cart
    const exists = cartItems.some( item => item.id === infoCourse.id ); // true or false
    if(exists){
        const cursos = cartItems.map( item => {
            item.id === infoCourse.id ? item.cantidad++ : item.cantidad;
        });
    }else{
        cartItems = [...cartItems, infoCourse];
    }
    
    renderCart();
}

function renderCart() {
    // Clear the cart container -> cartContainer.innerHTML = '';
    while (cartContainer.firstChild){
        cartContainer.removeChild(cartContainer.firstChild);
    }

    cartItems.forEach( (item) => {
        const { image, title, price, id, cantidad } = item;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${image}" alt="${title}" width="100"></td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;

        //add html to the tbody
        cartContainer.appendChild(row);

        //add to localStorage
        localStorage.setItem('carrito', JSON.stringify(cartItems));
    })
}