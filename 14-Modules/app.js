import alias, { nombreCliente, saldoCliente, 
        mostrarInformacionCliente, tieneSaldo as reviewSaldo, 
        Pet } 
from "./client.js";

console.log(nombreCliente, saldoCliente, mostrarInformacionCliente());

reviewSaldo(saldoCliente);

const pet = new Pet('Firulais', 3);
console.log(pet.mostrarInfo());

class Dog extends Pet{
    constructor(name, age, action){
        super(name, age);
        this.action = action;
    }
}

const dog = new Dog('Rex', 5, 'Ladrar'); 
console.log(dog);

alias(); // Llamada a la función por defecto