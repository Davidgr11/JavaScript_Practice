// SELECTORS
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');
const form = document.querySelector('#formulario-cita');
const citasLista = document.querySelector('#citas');
const btnEliminar = document.querySelector('#btn-eliminar');
const btnEditar = document.querySelector('#btn-editar');
const formInput = document.querySelector('#formulario-cita input[type="submit"]');

let editando = false;

// STATE OBJECT
const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

// CLASSES
class Notificacion {
    constructor(texto, tipo) {
        this.texto = texto;
        this.tipo = tipo;
        this.mostrarNotificacion();
    }

    mostrarNotificacion() {
        this.limpiarAlertas();
        const alerta = document.createElement('div');
        alerta.classList.add('text-center', 'w-full', 'p3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');
        alerta.textContent = this.texto;
        form.parentElement.insertBefore(alerta, form);

        setTimeout(() => {
            alerta.remove();
        }, 2500);
    }

    limpiarAlertas() {
        const alertas = document.querySelectorAll('.alert');
        alertas.forEach(alerta => {
            alerta.remove();
        });
    }
}

class AdminCitas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas.push(cita);
    }

    mostrarCitas() {
        this.limpiarCitas();

        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl', 'p-3');

            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            const contenedorBotones = document.createElement('div');
            contenedorBotones.classList.add('flex', 'justify-between', 'mt-10');

            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);

            const clone = structuredClone(cita);
            btnEditar.onclick = () => {
                editarCita(clone);
            }
            btnEliminar.onclick = () => {
                const notificacion = new Notificacion('Cita eliminada correctamente', 'exito');
                citasLista.removeChild(divCita);
                citas.citas = citas.citas.filter(c => c.id !== clone.id);


                if(citas.citas.length === 0) {
                    citasLista.innerHTML = '<p class="text-center text-gray-600">No hay citas, agrega una</p>';
                }
            }
            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
            citasLista.appendChild(divCita);
        });
    }

    limpiarCitas() {
        while (citasLista.firstChild) {
            citasLista.removeChild(citasLista.firstChild);
        }
    }

    editarCita(newCita){
        this.citas = this.citas.map(cita => cita.id === newCita.id ? newCita : cita);
        this.mostrarCitas();
    }
}

// Eventos

eventListeners();
function eventListeners() {
    pacienteInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    emailInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);

    form.addEventListener('submit', submitCita);
}

const citas = new AdminCitas();

// FUNCIONES
function datosCita(e) {
    citaObj[e.target.name] = e.target.value.trim();
}

function submitCita(e) {
    e.preventDefault();

    if (Object.values(citaObj).includes('')) {
        const notificacion = new Notificacion('Todos los campos son obligatorios', 'error');
        return;
    }

    if (editando) {
        citas.editarCita({...citaObj});
        const notificacion = new Notificacion('Editado correctamente', 'exito');
    }else{
        citas.agregarCita({ ...citaObj });
        const notificacion = new Notificacion('Cita agregada correctamente', 'exito');
        citas.mostrarCitas();
    }

    form.reset();
    resetCitaObj();
    formInput.value = 'Registrar Paciente';
    editando = false;
}

function resetCitaObj() {
    citaObj.paciente = '';
    citaObj.propietario = '';
    citaObj.email = '';
    citaObj.fecha = '';
    citaObj.sintomas = '';
    citaObj.id = generarId();
}

function generarId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function editarCita(cita) {
    editando = true;
    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    formInput.value = 'Editar Cita';
}