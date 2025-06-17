// Ejemplo de uso de callbacks en JavaScript
const paises = ['Francia', 'Alemania', 'Italia', 'España'];

function nuevoPais(pais, callback){
    setTimeout(() => {
        paises.push(pais);
        console.log(`Nuevo país añadido: ${pais}`);
        callback();
    }, 2000);
}

function mostrarPaises() {
    console.log('Lista de países:');
    paises.forEach(pais => {
        console.log(pais);
    });
}

nuevoPais('Portugal', mostrarPaises);
