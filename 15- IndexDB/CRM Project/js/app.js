(function (){
    let DB;

    document.addEventListener('DOMContentLoaded', function() {
        crearDB();
    });

    function crearDB (){
        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = () => {
            console.log('Error al crear la base de datos');
        }
        crearDB.onsuccess = () => {
            DB = crearDB.result;
            console.log('Base de datos creada correctamente');
            obtenerClientes();
        }
        crearDB.onupgradeneeded = (e) => {
            const db = e.target.result;
            const store = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });

            store.createIndex('nombre', 'nombre', {unique: false});
            store.createIndex('email', 'email', {unique: true});
            store.createIndex('telefono', 'telefono', {unique: false});
            store.createIndex('empresa', 'empresa', {unique: false});
            store.createIndex('id', 'id', {unique: true});

            console.log('BD lista');
        }
    }

    function obtenerClientes() {
        const t = DB.transaction('crm', 'readonly');
        const store = t.objectStore('crm');

        const clientes = store.getAll();

        clientes.onsuccess = () => {
            const resultados = clientes.result;
            resultados.forEach(cliente => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${cliente.nombre}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.telefono}</td>
                    <td>${cliente.empresa}</td>
                `;
                const buttonEdit = document.createElement('button');
                buttonEdit.textContent = 'Editar';
                buttonEdit.classList.add('btn', 'btn-editar', 'text-teal-600', 'mr-1');
                buttonEdit.onclick = () => {
                    // Logic to edit the client
                    console.log('Editar cliente:', cliente);
                    const url = new URL('editar-cliente.html', window.location.href);
                    url.searchParams.set('id', cliente.id);
                    window.location.href = url.toString();
                };
                newRow.appendChild(buttonEdit);
                const buttonDelete = document.createElement('button');  
                buttonDelete.textContent = 'Eliminar';
                buttonDelete.classList.add('btn', 'btn-eliminar', 'text-red-600', "ml-1");
                buttonDelete.onclick = () => {
                    // Logic to delete the client
                    console.log('Eliminar cliente:', cliente);
                    const t = DB.transaction('crm', 'readwrite');
                    const store = t.objectStore('crm');
                    store.delete(cliente.id);
                    t.oncomplete = () => {
                        newRow.remove();
                        console.log('Cliente eliminado');
                    };
                };
                newRow.appendChild(buttonDelete);
                newRow.classList.add('border-b', 'border-gray-200', 'hover:bg-gray-100', 'text-center', 'px-4', 'py-2');
                document.getElementById('listado-clientes').appendChild(newRow);
            });
        };

        clientes.onerror = () => {
            console.error('Error al obtener los clientes:', clientes.error);
        };
    }
})();