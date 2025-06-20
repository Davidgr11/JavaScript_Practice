// Selectors
const cryptosSelect = document.querySelector('#criptomonedas');
const monedasSelect = document.querySelector('#moneda');
const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

// Variables
const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

// Promise
const obtenerCryptos  = cryptos => new Promise( resolve => {
    resolve(cryptos);
});

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
    form.addEventListener('submit', submitForm);

    cryptosSelect.addEventListener('change', leerValor);
    monedasSelect.addEventListener('change', leerValor);
});

// Functions
function consultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.Data);
            return obtenerCryptos(data.Data);
        })
        .then(cryptos => {selectCryptos(cryptos);});
}

function selectCryptos(cryptos) {
    cryptos.forEach(crypto => {
        const option = document.createElement('option');
        const { FullName, Name } = crypto.CoinInfo;
        
        option.value = Name;
        option.textContent = FullName;
        cryptosSelect.appendChild(option);
    })
}

function leerValor(e){
    e.preventDefault();
    objBusqueda[e.target.name] = e.target.value;
    console.log(objBusqueda);
}

function submitForm(e) {
    e.preventDefault();

    const { moneda, criptomoneda } = objBusqueda;
    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    consultarAPI();
}

function mostrarAlerta(mensaje) {
    const existeError = document.querySelector('.error');
    if (!existeError) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        divMensaje.textContent = mensaje;
        form.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarCotizacionHTML(data.DISPLAY[criptomoneda][moneda]);
        });
}

function mostrarCotizacionHTML(cotizacion) {
    limpiarHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const high = document.createElement('p');
    high.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span></p>`;
    const low = document.createElement('p');
    low.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span></p>`;
    const cambio = document.createElement('p');
    cambio.innerHTML = `<p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>`;
    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `<p>Última actualización: <span>${LASTUPDATE}</span></p>`;

    resultado.appendChild(precio);
    resultado.appendChild(high);
    resultado.appendChild(low);
    resultado.appendChild(cambio);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML();
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;
    resultado.appendChild(spinner);
}