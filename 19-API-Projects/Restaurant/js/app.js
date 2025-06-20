// Selectors
const btnGuardarCliente = document.querySelector('#guardar-cliente');


// Variables
let cliente = {
    mesa: '',
    hora: '',
    pedido: [],
}
const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    btnGuardarCliente.addEventListener('click', guardarCliente);
});

// Functions
function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value

    const camposVacios = [mesa, hora].some(campo => campo === '');
    if (camposVacios) {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }else{
        mostrarAlerta('Cliente guardado correctamente', 'success');
        cliente = {...cliente, mesa, hora };
        console.log(cliente);

        // Cerrar el modal
        const modalFormulario = document.querySelector('#formulario');
        const modal = bootstrap.Modal.getInstance(modalFormulario);
        modal.hide();

        // Reiniciar el formulario
        document.querySelector('.modal-body form').reset();

        // Secciones
        mostrarSecciones();

        // Obtener platillos
        obtenerPlatillos();
    }

}

function mostrarAlerta(mensaje, tipo) {
    // Eliminar alerta previa
    const alertaPrevia = document.querySelector('.invalid-feedback');
    if (alertaPrevia) {
        alertaPrevia.remove();
    }

    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
    if (tipo === 'error') {
        alerta.classList.add('alert', 'alert-danger');
    } else {
        alerta.classList.add('alert', 'alert-success');
    }

    document.querySelector('.modal-body form').appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 2000);
}

function mostrarSecciones() {
    const secciones = document.querySelectorAll('.d-none');
    secciones.forEach(seccion => {
        seccion.classList.remove('d-none');
    });
}

function obtenerPlatillos() {
    const url = 'http://localhost:4000/platillos';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarPlatillos(datos))
        .catch(error => console.error('Error al obtener los platillos:', error));
}

function mostrarPlatillos(platillos) {
    const contenido = document.querySelector('.contenido');
    platillos.forEach(platillo => {
        // Row
        const row = document.createElement('div');
        row.classList.add('row', 'py-3', 'border-bottom');
        // Name
        const nombre = document.createElement('div');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        // Price
        const precio = document.createElement('div');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `$${platillo.precio}`;

        // Category
        const categoria = document.createElement('div');
        categoria.classList.add('col-md-3');
        categoria.textContent = categorias[platillo.categoria];
        console.log(categoria);

        // Input
        const input = document.createElement('input');
        input.classList.add('form-control');
        input.type = 'number';
        input.min = 0;
        input.value = 0;
        input.id = `producto-${platillo.id}`;
        // Event Handler
        input.onchange = function(){
            cantidad = parseInt(input.value);
            agregarPlatillo({...platillo, cantidad});
        }

        // Button
        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(input);


        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);
        contenido.appendChild(row);
    })
}

function agregarPlatillo(producto) {

    let {pedido} = cliente;
    const {id, cantidad} = producto;
    
    // Validar si la cantidad es válida
    if(cantidad > 0) {
        
        // Agregamos el pedido solamente si no existe
        if(!pedido.some(platillo => platillo.id === id)) {
            pedido.push({...producto});
        }else{
            // Actualizar la cantidad del producto en el pedido
            pedido = pedido.map(platillo => {
                if(platillo.id === id) {
                    platillo.cantidad = cantidad;
                }
                return platillo;
            });
        }
    }else if (cantidad === 0) {
        // Eliminar producto
        pedido = pedido.filter(platillo => platillo.id !== id);
    }
    cliente.pedido = [...pedido];

    limpiarHTML();
    actualizarResumen();
}

function actualizarResumen(){
    const contenido = document.querySelector('#resumen .contenido');
    // DIV
    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6', 'card', 'py-3', 'px-4', 'shadow');
    // MESA
    const mesa = document.createElement('p');
    mesa.classList.add('fw-bold');
    mesa.textContent = `Mesa: `;
    const mesaSpan = document.createElement('span');
    mesaSpan.classList.add('fw-normal');
    mesaSpan.textContent = cliente.mesa;
    mesa.appendChild(mesaSpan);
    // HORA
    const hora = document.createElement('p');
    hora.classList.add('fw-bold');
    hora.textContent = `Hora: `;
    const horaSpan = document.createElement('span');
    horaSpan.classList.add('fw-normal');
    horaSpan.textContent = cliente.hora;
    hora.appendChild(horaSpan);
    // Titulo
    const titulo = document.createElement('h3');
    titulo.classList.add('my-4', 'text-center');
    titulo.textContent = 'Platillos Consumidos';

    // Contenido de los platillos
    const grupo = document.createElement('ul');
    grupo.classList.add('list-group');
    const {pedido} = cliente;
    pedido.forEach(platillo => {
        const {nombre, cantidad, precio, id} = platillo;
        // Lista
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        // Nombre
        const nombrePlatillo = document.createElement('h4');
        nombrePlatillo.classList.add('my-4');
        nombrePlatillo.textContent = nombre;
        li.appendChild(nombrePlatillo);
        // Cantidad
        const cantidadPlatillo = document.createElement('p');
        cantidadPlatillo.classList.add('fw-bold');
        cantidadPlatillo.textContent = `Cantidad: ${cantidad}`;
        li.appendChild(cantidadPlatillo);
        // Precio
        const precioPlatillo = document.createElement('p');
        precioPlatillo.classList.add('fw-bold');
        precioPlatillo.textContent = `$${precio}`;
        li.appendChild(precioPlatillo);
        // Subtotal
        const subtotalPlatillo = document.createElement('p');
        subtotalPlatillo.classList.add('fw-bold');
        subtotal = cantidad * precio;
        subtotalPlatillo.textContent = `Subtotal: $${subtotal}`;
        li.appendChild(subtotalPlatillo);
        // Boton eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = function() {
            // Eliminar del pedido
            cliente.pedido = cliente.pedido.filter(platillo => platillo.id !== id);
            // Actualizar el input del producto
            const inputProducto = document.querySelector(`#producto-${id}`);
            inputProducto.value = 0;
            // Actualizar el resumen
            limpiarHTML();

            actualizarResumen();
            
        }
        li.appendChild(btnEliminar);


        grupo.appendChild(li);
    });

    
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(titulo);
    resumen.appendChild(grupo);
    contenido.appendChild(resumen);
    
    if(cliente.pedido.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.classList.add('text-center');
        mensaje.textContent = 'No hay platillos agregados';
        resumen.remove();
        contenido.appendChild(mensaje);
    }else{
        propinas();
    }


}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido');
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}

function propinas() {
    const contenido = document.querySelector('#resumen .contenido');
    // DIV
    const divPropina = document.createElement('div');
    divPropina.classList.add('col-md-6', 'card', 'py-3', 'px-4', 'shadow');
    // Titulo
    const titulo = document.createElement('h3');
    titulo.classList.add('my-4', 'text-center');
    titulo.textContent = 'Propinas';
    // Propinas
    const propinas = document.createElement('p');
    propinas.classList.add('fw-bold');
    propinas.textContent = 'Elige una propina:';
    
    // Select
    const select = document.createElement('select');
    select.classList.add('form-select', 'mt-2');
    select.id = 'propina';
    
    // Opciones
    const opciones = [0, 5, 10, 15, 20];
    opciones.forEach(opcion => {
        const option = document.createElement('option');
        option.value = opcion;
        option.textContent = `${opcion}%`;
        select.appendChild(option);
    });

    divPropina.appendChild(titulo);
    divPropina.appendChild(propinas);
    divPropina.appendChild(select);

    // Evento para calcular la propina
    select.onchange = function() {
        const propinaSeleccionada = parseInt(select.value);
        const {pedido} = cliente;
        let total = 0;
        pedido.forEach(platillo => {
            total += platillo.precio * platillo.cantidad;
        });
        const propina = (total * propinaSeleccionada) / 100;
        const totalConPropina = total + propina;

        // Mostrar el total
        const totalDiv = document.createElement('h4');
        totalDiv.classList.add('fw-bold', 'mt-3');
        totalDiv.innerHTML = `
            Total: <span class="text-success">$${total.toFixed(2)}</span> <br>
            Propina: <span class="text-success">$${propina.toFixed(2)}</span> <br>
            Total con Propina: <span class="text-success">$${totalConPropina.toFixed(2)}</span>
        `;
        
        // Limpiar el contenido previo
        const contenidoTotal = document.querySelector('#resumen .contenido .total');
        if(contenidoTotal) {
            contenidoTotal.remove();
        }
        
        // Agregar el total al div de propinas
        totalDiv.classList.add('total');
        divPropina.appendChild(totalDiv);
    }
    
    contenido.appendChild(divPropina);

}