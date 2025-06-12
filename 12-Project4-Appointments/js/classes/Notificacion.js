import { form } from '../selectores.js';

export default class Notificacion {
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