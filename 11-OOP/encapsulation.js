class Cuenta {
  #saldo = 0; // Propiedad privada

  constructor(nombre) {
    this.nombre = nombre;
  }

  getSaldo(){
    return this.#saldo;
  }


  setSaldo(saldo) {
    this.#saldo = saldo; 
  }
}

const cuenta1 = new Cuenta('David');
console.log(cuenta1.getSaldo());
cuenta1.setSaldo(100);
console.log(cuenta1.getSaldo()); 
// console.log(cuenta1.#saldo); //Esto dará un error porque #saldo es privado