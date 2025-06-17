// Ejemplo de uso de Promesas en JavaScript
// True or False depending on the context of the code

/*
fulfillment: The promise is resolved successfully.
rejection: The promise is rejected due to an error or failure.
pending: The promise is still in progress and has not yet been resolved or rejected.
*/

const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;

    if (descuento) {
        resolve("Descuento aplicado");
    } else {
        reject("No se pudo aplicar el descuento");
    }
});

aplicarDescuento
    .then(resultado => { console.log(resultado); // Resolve
    })
    .catch(error => { console.warn(error); // Reject
    })
    .finally(() => { console.log("Operación de descuento finalizada");
    });