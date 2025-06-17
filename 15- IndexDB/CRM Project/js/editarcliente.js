(function () {
    let DB;

    document.addEventListener("DOMContentLoaded", function () {
        conectarDB();
        const parametros = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametros.get('id'));

        if (idCliente) {
            setTimeout(() => {
            obtenerCliente(idCliente);}, 1000);
        }
     
    });

    function obtenerCliente(id) {
        const transaction = DB.transaction('crm', 'readonly');
        const store = transaction.objectStore('crm');
        const cliente = store.get(id);

        cliente.onsuccess = () => {
            const result = cliente.result;
            if (result) {
                console.log('Cliente encontrado:', result);
                document.querySelector('#nombre').value = result.nombre;
                document.querySelector('#email').value = result.email;
                document.querySelector('#telefono').value = result.telefono;
                document.querySelector('#empresa').value = result.empresa;
                document.querySelector('#formulario input[type="submit"]').value = 'Actualizar Cliente';
                // Aquí puedes llenar los campos del formulario con los datos del cliente

                const formulario = document.querySelector('#formulario');
                formulario.addEventListener('submit', function (e) {
                    e.preventDefault();
                    const nombre = document.querySelector('#nombre').value;
                    const email = document.querySelector('#email').value;
                    const telefono = document.querySelector('#telefono').value;
                    const empresa = document.querySelector('#empresa').value;

                    if (nombre === '' || email === '' || telefono === '' || empresa === '') {
                        console.error('Todos los campos son obligatorios');
                        return;
                    }

                    // Actualizar cliente
                    const clienteActualizado = {
                        ...result,
                        nombre,
                        email,
                        telefono,
                        empresa
                    };

                    const transactionUpdate = DB.transaction(['crm'], 'readwrite');
                    const storeUpdate = transactionUpdate.objectStore('crm');
                    storeUpdate.put(clienteActualizado);

                    transactionUpdate.oncomplete = () => {
                        console.log('Cliente actualizado correctamente');
                        formulario.reset();
                        setTimeout(() => {
                            document.querySelector('#formulario input[type="submit"]').value = 'Actualizar Cliente';
                            window.location.href = 'index.html';
                        }, 1000);
                    };

                    transactionUpdate.onerror = () => {
                        console.error('Error al actualizar el cliente');
                    };
                });
            } else {
                console.error('Cliente no encontrado');
            }
        };

        cliente.onerror = () => {
            console.error('Error al obtener el cliente');
        };
    }

    function conectarDB(){
        const request = window.indexedDB.open('crm', 1);
        request.onerror = function() {
            console.error('Error al conectar a la base de datos');
        };
        request.onsuccess = function() {
            console.log('Conexión a la base de datos establecida');
            DB = request.result;
        };
    }

})();