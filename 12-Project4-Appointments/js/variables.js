import { generarId } from './funciones.js';

// Variables globales en EMAScript 6 son constantes, por eso la cambiamos a un objeto para poder modificar su valor
let editando = {
    value: false
}

const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando, citaObj
}
