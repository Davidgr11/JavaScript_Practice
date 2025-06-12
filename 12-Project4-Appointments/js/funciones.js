import {citaObj, editando} from './variables.js';
import Notificacion from './classes/Notificacion.js';
import AdminCitas from './classes/AdminCitas.js';
import {form, formInput, propietarioInput, pacienteInput, emailInput, fechaInput, sintomasInput} from './selectores.js';

const citas = new AdminCitas();

export function datosCita(e) {
    citaObj[e.target.name] = e.target.value.trim(); // Dynamic key assignment
}

export function submitCita(e) {
    e.preventDefault();

    if (Object.values(citaObj).includes('')) {
        const notificacion = new Notificacion('Todos los campos son obligatorios', 'error');
        return;
    }

    if (editando.value) {
        citas.editarCita({...citaObj}); // Spread operator to create a new object
        const notificacion = new Notificacion('Editado correctamente', 'exito');
    }else{
        citas.agregarCita({ ...citaObj });
        const notificacion = new Notificacion('Cita agregada correctamente', 'exito');
        citas.mostrarCitas();
    }

    form.reset();
    resetCitaObj();
    formInput.value = 'Registrar Paciente';
    editando.value = false;
}

export function resetCitaObj() {
    citaObj.paciente = '';
    citaObj.propietario = '';
    citaObj.email = '';
    citaObj.fecha = '';
    citaObj.sintomas = '';
    citaObj.id = generarId();
}

export function generarId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function editarCita(cita) {
    editando.value = true;
    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    formInput.value = 'Editar Cita';
}