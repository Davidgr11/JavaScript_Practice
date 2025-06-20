// Selectores
const resultado = document.querySelector('#resultado');
const paginacion = document.querySelector('#paginacion');
const form = document.querySelector('#formulario');
const registrosPP = 24;
let totalPaginas = 0;
let iterador = 0;
let paginaActual = 1;

// Eventos
window.onload = () => {
    form.addEventListener('submit', validarFormulario);
}

// Funciones
function validarFormulario(e) {
    e.preventDefault();

    const terminobusqueda = document.querySelector('#termino').value;

    if(terminobusqueda === '') {
        mostrarAlerta('Debe ingresar un término de búsqueda');
        resultado.innerHTML = '';
        paginacion.innerHTML = '';
        return;
    } else{
        buscarImagenes();
    }
}

function mostrarAlerta(mensaje) {
    // Eliminar alerta previa
    if(document.querySelector('.alert')) {
        document.querySelector('.alert').remove();
    }

    // Crear e insertar alerta
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('alert', 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6');
    form.appendChild(alerta);

    // Eliminar alerta después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 2000);
}

function buscarImagenes() {

    const term = document.querySelector('#termino').value;
    const key = '50930896-85a4c8206456b4ac96296ff7f';
    const url = `https://pixabay.com/api/?key=${key}&q=${term}&per_page=${registrosPP}&page=${paginaActual}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            totalPaginas = calcularPaginas(resultado.totalHits);
            console.log(`Total de páginas: ${totalPaginas}`);
            mostrarImagenes(resultado.hits);});
}

function calcularPaginas(total) {
    return parseInt(Math.ceil(total / registrosPP));
}

function *crearPaginador(total){
    for(let i = 1; i<= total; i++) {
        yield i;
    }
}

function mostrarImagenes(imagenes) {
    console.log(imagenes);
    // Limpiar resultados previos
    resultado.innerHTML = '';

    imagenes.forEach(img => {
        const { previewURL, likes, views, largeImageURL } = img;

        resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
                <img class="w-full" src="${previewURL}">;
                <div class="p-4">
                    <p class="font-bold">${likes} <span class="font-light">Likes</span></p>
                    <p class="font-bold">${views} <span class="font-light">Vistas</span></p>
                    <a href ="${largeImageURL}" target="_blank" rel="noopener noreferrer" 
                    class="block bg-blue-800 hover:bg-blue-600 text-white uppercase font-bold text-center rounded mt-5 p-1">
                    Ver Imagen</a>
                </div
            </div>
        </div>`
    });

    imprimirPaginador();
}

function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);

    while(paginacion.firstChild) {
        paginacion.removeChild(paginacion.firstChild);
    }

    while(true){
        const { value, done } = iterador.next();
        if(done) return;

        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-2', 'mr-2', 'font-bold', 'uppercase', 'rounded');

        boton.onclick = () => {
            paginaActual = value;
            buscarImagenes();
        }

        paginacion.appendChild(boton);
        paginacion.classList.add('flex', 'flex-wrap', 'justify-center', 'mt-10');
    }
}