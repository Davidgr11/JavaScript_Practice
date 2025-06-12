console.info("---Iterators---");

function crearIterador(cart){
    let i = 0;
    return {
        siguiente: () => {
            const fin = (i >= cart.length);
            const valor = !fin ? cart[i++] : undefined;
            
            return {
                valor,
                fin
            };
        }
    }
}
const cart = ['producto 1', 'producto 2', 'producto 3'];

const moveCart = crearIterador(cart);
console.log(moveCart.siguiente()); // { value: 'producto 1', done: false }

/////////////////////////////////////////////////////////////////////////////////////
console.info("---New Iterators---");

const cities = ['Madrid', 'Barcelona', 'Valencia', 'Bilbao'];
const ordenes = new Set([123, 456, 789]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('edad', 30);
datos.set('profesion', 'Desarrollador');

//  Entries [key, value]
for(let entry of cities.entries()){
    console.log(entry); // [0, 'Madrid'], [1, 'Barcelona'], ...
}
for(let entry of ordenes.entries()){
    console.log(entry); // [0, 123], [1, 456], [2, 789]
}
for(let entry of datos.entries()){
    console.log(entry); // ['nombre', 'Juan'], ['edad', 30], ['profesion', 'Desarrollador']
}
// Keys
for(let key of cities.keys()){
    console.log(key); // 0, 1, 2, 3
}
for(let key of ordenes.keys()){
    console.log(key); // 0, 1, 2
}
for(let key of datos.keys()){
    console.log(key); // 'nombre', 'edad', 'profesion'
}

// Values
for(let value of cities.values()){
    console.log(value); // 'Madrid', 'Barcelona', ...
}
for(let value of ordenes.values()){
    console.log(value); // 123, 456, 789
}
for(let value of datos.values()){
    console.log(value); // 'Juan', 30, 'Desarrollador'
}
// For of
for(let city of cities){
    console.log(city); // 'Madrid', 'Barcelona', 'Valencia', 'Bilbao'
}
for(let order of ordenes){
    console.log(order); // 123, 456, 789
}
for(let dato of datos){
    console.log(`${dato}`); // 'nombre: Juan', 'edad: 30', 'profesion: Desarrollador'
}