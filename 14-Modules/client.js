// Variable exports
export const nombreCliente = 'Cliente David';
export const saldoCliente = 5000;

// Function exports
export function mostrarInformacionCliente() {
    return `Nombre: ${nombreCliente}, Saldo: ${saldoCliente}`;
}

export function tieneSaldo(saldoCliente){
    if(saldoCliente > 0){
        console.log('El cliente tiene saldo disponible');
    }
    else {
        console.log('El cliente no tiene saldo disponible');
    }
}

// Class exports
export class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    mostrarInfo() {
       return  `Nombre de la mascota: ${this.name}, Edad: ${this.age}`
    }
}

export default function newFunction(){
    console.log('Esta es una función por defecto');
}