class Pájaro {
  volar() {
    console.log("El pájaro está volando.");
  }
}

class Avión {
  volar() {
    console.log("El avión está volando.");
  }
}

// Polymorphism allows different classes to be treated as instances of the same class through a common interface.
// In this case, both Pájaro and Avión have a method called volar, allowing us to use them interchangeably.
function iniciarVuelo(objetoVolador) {
  objetoVolador.volar();
}

iniciarVuelo(new Pájaro()); // El pájaro está volando.
iniciarVuelo(new Avión());  // El avión está volando.