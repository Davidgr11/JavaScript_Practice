// First class functions
// Functions can be passed as arguments, returned from other functions, and assigned to variables
const suma = (a, b) => a + b;
const multiplicacion = (a, b) => a * b;
const sumarOMultiplicar = (fn) => fn(10, 20);

const resultado = sumarOMultiplicar(suma);
console.log(resultado);


// Higher-order functions
// Functions that take other functions as arguments or return functions
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisor 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 }
];

const mayor400 = producto => producto.precio > 400;
const resultado2 = carrito.filter(mayor400);
console.log(resultado2);

// Map function to transform data
const obtenerNombres = producto => producto.nombre;
const resultado3 = carrito.map(obtenerNombres);
console.log(resultado3);

// Pure functions
// Functions that do not cause side effects and always return the same output for the same input
const calcularDescuento = (precio, descuento) => precio - (precio * (descuento / 100));
const precioOriginal = 100;
const descuento = 20;
const precioConDescuento = calcularDescuento(precioOriginal, descuento);
console.log(`Precio original: $${precioOriginal}, Precio con descuento: $${precioConDescuento}`);

// Functions that return functions
const crearSaludo = (saludo) => {
    return (nombre) => {
        return `${saludo}, ${nombre}!`;
    };
};
const saludoPersonalizado = crearSaludo('Hola');
const mensaje = saludoPersonalizado('Juan');
console.log(mensaje); // "Hola, Juan!"

// Closures
// Functions that have access to variables from their parent scope even after the parent function has finished executing
const contador = () => {
    let count = 0;
    return () => {
        count += 1;
        return count;
    };
};
const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2
const getClient = () => {
    let client = 'John Doe';
    return () => {
        return client;
    };
}
const client = getClient();
console.log(client()); // "John Doe"

// Currying
// Transforming a function that takes multiple arguments into a series of functions that each take a single argument
const sumar = (a) => (b) => a + b;
const sumarDiez = sumar(10);
const resultado4 = sumarDiez(5);
console.log(resultado4); // 15

// Function composition
// Combining two or more functions to produce a new function
const componer = (f, g) => (x) => f(g(x));
const sumarUno = (x) => x + 1;
const multiplicarPorDos = (x) => x * 2;
const resultado5 = componer(multiplicarPorDos, sumarUno)(5);
console.log(resultado5); // 12 (5 + 1 = 6, 6 * 2 = 12)

// Composition en lugar de clases
const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});
const guardarEmail = (info) => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = (info) => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`);
    }
});
const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
});
const obtenerPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre, 
        email, 
        empresa
    }
    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info), 
        obtenerEmpresa(info)
    )
}
function Empleado(nombre, email, puesto) {
    let info = {
        nombre, 
        email, 
        puesto
    }
    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Juan', null, 'Udemy');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail()
cliente.mostrarEmpresa()

const empleado = Empleado('Pedro', null, 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail()
empleado.mostrarPuesto()