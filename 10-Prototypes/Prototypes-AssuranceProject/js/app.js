// Constructores

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
Seguro.prototype.cotizarSeguro = function(){
    /*
        1 = Americano 1.15
        2 = Asiático 1.05
        3 = Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':   cantidad = base * 1.15;
                    break;
        case '2':   cantidad = base * 1.05;
                    break;
        case '3':   cantidad = base * 1.35;
                    break;
        default: break;
    }
    // Cada año de diferencia hay que reducir 3% al valor del seguro
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    // Si el seguro es básico se multiplica por 30% más
    // Si el seguro es completo se multiplica por 50% más
    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    }
    else{
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI(){

}
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();
    const min = max - 10;


    const selectYear = document.querySelector('#year');
    for(let i = max; i >= min ; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div, document.querySelector('#resultado'));


    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (seguro, total) => {
    const {marca, year, tipo} = seguro;
    let textoMarca;
    switch(marca){
        case '1':   textoMarca = 'Americano';
                    break;
        case '2':   textoMarca = 'Asiático';
                    break;
        case '3':   textoMarca = 'Europeo';
                    break;
        default:    textoMarca = 'Desconocido';
                    break;
    }
    // Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Tu Resumen:</p>
        <p>Marca: ${textoMarca}</p>
        <p>Año: ${year}</p>
        <p>Tipo: ${tipo}</p>
        <p>Total: <span class="font-bold">$${total}</span></p>
    `;
    const resultadoDiv = document.querySelector('#resultado');
    // Mostrar resultado
    resultadoDiv.innerHTML = ''; // Limpiar resultados previos
    
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; // Ocultar spinner
        resultadoDiv.appendChild(div);
    }, 3000);
}

const ui = new UI(); // Instancia
console.log(ui);

document.addEventListener('DOMContentLoaded', function(){
    ui.llenarOpciones();
});


eventListeners();

function eventListeners() {
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();
    const marca = document.querySelector('#marca').value;
    const year = document.querySelector('#year').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    console.log(marca, year, tipo);

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }else {
        ui.mostrarMensaje('Cotizando...', 'correcto');
    }

    const seguro = new Seguro (marca, year, tipo);
    const total = seguro.cotizarSeguro();

    UI.prototype.mostrarResultado(seguro, total);
}