(function (){
    // SELECTORS
    let DB;
    const formulario = document.querySelector('#formulario');

    // EVENT LISTENERS & INITIALIZATION
    document.addEventListener("DOMContentLoaded", function() {
        conectarDB();
        formulario.addEventListener('submit', validarCliente);
    });


    // FUNCTIONS
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

    function validarCliente(e){
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        e.preventDefault();
        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Create Static Object
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id: Date.now() // Unique ID based on timestamp
        };
        
        crearCliente(cliente);
    }

    function crearCliente(cliente){
        const t = DB.transaction(['crm'], 'readwrite');
        const store = t.objectStore('crm');
        store.add(cliente);
        t.onerror = function() {
            imprimirAlerta('Error al agregar el cliente', 'error');
            console.error('Error al agregar el cliente:', t.error);
        };
        t.oncomplete = function() {
            imprimirAlerta('Cliente agregado correctamente', 'exito');
            formulario.reset();

            setTimeout(() => {
                window.location.href = 'index.html'; // Redirect to index page
            }, 3000);
        };
    }

    function imprimirAlerta(mensaje, tipo){
        // clean 
        const alerta = document.querySelector('.alerta');
        if(alerta){
            alerta.remove();
        }

        // Create element with its characteristics
        const divMensaje = document.createElement('div');
        divMensaje.textContent = mensaje;
        divMensaje.classList.add('alerta', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        
        if(tipo === 'error'){
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        // Insert to the DOM
        formulario.insertBefore(divMensaje, document.querySelector('#formulario input[type="submit"]'));
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);



    }

})();