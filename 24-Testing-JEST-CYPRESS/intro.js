// ESTABLECER UN "ESPERADO" Y COMPARARLO CON UN "RESULTADO"
function suma(a, b) {
    return a + b;
}

let resultado = suma(5, 10);
let esperado = 15;
let esperado2 = 16;
if (resultado === esperado) {
    console.log(`La suma es correcta: ${resultado}`);
}
if (resultado !== esperado2) {
    console.error(`La suma es incorrecta: ${resultado}, se esperaba: ${esperado2}`);
}

// TRY CATCH
try {
    let resultado2 = suma(5, 10);
    if (resultado2 !== esperado) {
        throw new Error(`La suma es incorrecta: ${resultado2}, se esperaba: ${esperado}`);
    }
    console.log(`La suma es correcta: ${resultado2}`);
} catch (error) {
    console.error(error.message);
}