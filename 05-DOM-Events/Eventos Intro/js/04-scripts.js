const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(`Resultado enviado: ${e.target.value}`);

});