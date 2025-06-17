let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB(); // Function to create or open the database

    setInterval(() => {
        crearCliente();
    }, 5000); // Create a new client every 5 seconds
});


function crmDB() {

    let crmDB = window.indexedDB.open('crm', 1);// Open with name 'crm' and version 1

    // Validate if the database is created or updated
    crmDB.onerror = () => {
        console.log('Error al abrir la base de datos');
    };
    crmDB.onsuccess = () => {
        console.log('Base de datos abierta correctamente');
        DB = crmDB.result; // e.target.result
    }

    // Configuration
    crmDB.onupgradeneeded = (e) => {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'id',
            autoIncrement: true
        });

        // CREATE INDEXES
        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('phone', 'phone', { unique: false });
        objectStore.createIndex('date', 'date', { unique: false });

        // INSERT DATA
    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = () => {
        console.log('Transacción completada');
    }
    transaction.onerror = () => {
        console.log('Error en la transacción');
    }

    let objectStore = transaction.objectStore('crm');
    const newClient = {
        name: 'Cliente ',
        email: 'cliente' + Math.floor(Math.random() * 1000) + '@example.com',
        phone: '123456789',
        date: new Date().toISOString()
    }

    const request = objectStore.add(newClient);
}