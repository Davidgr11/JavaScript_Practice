const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', () => {
    console.log("Click en el botón flotante");
    footer.classList.toggle('activo'); // Toggle the 'activo' class on the footer
});


