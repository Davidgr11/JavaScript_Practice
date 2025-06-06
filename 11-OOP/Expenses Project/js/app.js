// VARIABLES Y SELECTORES
const form = document.querySelector('#agregar-gasto');
const gastListado = document.querySelector('#gastos ul');


// EVENTOS
eventListeners(); // Initializing event listeners
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    form.addEventListener('submit', agregarGasto);
}

// CLASES
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
    }
    modificaRestante(){
        const gastosTotal = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante -= gastosTotal;
    }
    eliminarGasto(id) {
        const eliminado = this.gastos.find(gasto => gasto.id === id);
        this.gastos = this.gastos.filter(gasto => gasto.id !== id); // Filter out the expense with the given ID
        console.log(eliminado);
        this.rembolsa(eliminado.cantidad); // Update the remaining budget after removing the expense
    }
    rembolsa(cantidad){
        this.restante = this.restante + cantidad; // Add the removed expense amount back to the remaining budget
    }
}
class UI{
    insertarPresupuesto(objetoPresupuesto) {
        const {presupuesto, restante} = objetoPresupuesto;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        divMensaje.textContent = mensaje;
        document.querySelector('.primario').insertBefore(divMensaje, form);

        setTimeout(() => {
            divMensaje.remove(); // Remove the alert after 3 seconds
        }, 2000);
    }
    agregaListado(gastos){
        this.limpiarHTML(); // Clear previous expenses from the list
        if(gastos.length > 0) {
            gastos.forEach(gasto => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.dataset.id = gasto.id; // Set the ID for the list item
                li.innerHTML = `
                    ${gasto.gasto} <span class="badge badge-primary badge-pill">$${gasto.cantidad}</span>
                `;

                const btn = document.createElement('button');
                btn.classList.add('btn', 'btn-danger', 'borrar-gasto');
                btn.textContent = 'Borrar';
                btn.onclick = () => {
                    eliminarGasto(gasto.id);
                }


                li.appendChild(btn);
                gastListado.appendChild(li);
            });
        }
    }
    limpiarHTML() {
        while(gastListado.firstChild) {
            gastListado.removeChild(gastListado.firstChild); // Remove all child elements from the list
        }
    }
    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante; // Update the remaining budget in the UI
    }
    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');
        
        if((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }
    }
}


let presupuesto; // Se asigna afuera para que no se pierda el valor dentro del bloque
const ui = new UI();

// FUNCIONES
function preguntarPresupuesto() {
    let presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    presupuestoUsuario = Number(presupuestoUsuario);

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload(); // Reload the page if input is invalid
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto); // Call to UI method to display the budget
}
function agregarGasto(e){
    e.preventDefault();

    const gasto = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(gasto === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }else if(cantidad > presupuesto.restante){
        ui.imprimirAlerta('Cantidad excede el presupuesto restante', 'error');
        return;
    }

    const gastoObj = {
        gasto, 
        cantidad,
        id: Date.now() // Unique ID based on current timestamp
    }
    presupuesto.nuevoGasto(gastoObj); // Add the new expense to the budget
    presupuesto.modificaRestante();
    ui.imprimirAlerta('Gasto agregado correctamente', 'exito');
    ui.agregaListado(presupuesto.gastos); // Call to UI method to add the expense to the list
    ui.actualizarRestante(presupuesto.restante); // Update the remaining budget in the UI
    ui.comprobarPresupuesto(presupuesto);

    form.reset(); // Reset the form after adding the expense

}
function eliminarGasto(id) {
    presupuesto.eliminarGasto(id); // Call to Presupuesto method to remove the expense
    ui.agregaListado(presupuesto.gastos); // Update the expense list in the UI
    ui.actualizarRestante(presupuesto.restante); // Update the remaining budget in the UI
    ui.comprobarPresupuesto(presupuesto);
}