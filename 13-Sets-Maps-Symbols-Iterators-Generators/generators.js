console.info("---Generators---");

function *generador() {
    yield 1;
    yield 2+2;
    yield 'hola';
}	

const gen = generador();
console.log(gen); // Generator {}
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next().value); // { value: 4, done: false }


// Shopping store example
function *createStoreCart(cartNew){
    for (let i = 0 ; i< cartNew.lenght ; i++){
        yield cartNew[i];
    }
}

const cartNew = ['producto 1', 'producto 2', 'producto 3'];
const storeCart = createStoreCart(cartNew);

console.log(storeCart.next()); // { value: 'producto 1', done: false }
console.log(storeCart.next()); // { value: 'producto 2', done: false }