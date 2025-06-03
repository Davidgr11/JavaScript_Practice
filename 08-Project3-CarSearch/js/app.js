// Variables
const result = document.querySelector('#resultado');
const year = document.querySelector('#year'); // select element for years
const maxDate = new Date().getFullYear();
const min = maxDate -10;
const marca = document.querySelector('#marca'); // select element for car brands
const minimo = document.querySelector('#minimo'); // input for minimum price
const maximo = document.querySelector('#maximo'); // input for maximum price
const puertas = document.querySelector('#puertas'); // select element for number of doors
const transmision = document.querySelector('#transmision'); // select element for transmission type
const color = document.querySelector('#color'); // select element for car color

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Events
document.addEventListener('DOMContentLoaded', function() {
    mostrarAutos(autos); // Show all cars on page load
    llenarSelect();

});

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

// Functions
function mostrarAutos(autos){
    cleanAutos();

    if (autos.length === 0) {
        const noResults = document.createElement('div');
        noResults.textContent = 'No hay resultados';
        noResults.classList.add('alerta', 'error');
        result.appendChild(noResults);
        return;
    }
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `${marca}-${modelo} - ${year} - ${puertas} - ${transmision} - $${precio} - ${color}`;
        
        result.appendChild(autoHTML);
    })
}
function llenarSelect() {
    for (let i = maxDate; i >= min; i--){
        console.log(i);
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    mostrarAutos(resultado);
}
function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}
function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === parseInt(datosBusqueda.year);
    }
    return auto;
}
function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= parseInt(datosBusqueda.minimo);
    }
    return auto;
}
function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= parseInt(datosBusqueda.maximo);
    }
    return auto;
}
function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === parseInt(datosBusqueda.puertas);
    }
    return auto;
}
function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}
function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }
    return auto;
}
function cleanAutos(){
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}