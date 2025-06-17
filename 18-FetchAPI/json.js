const cargarJsonObject = document.getElementById("cargarJsonObject");
cargarJsonObject.addEventListener("click", obtenerDatosJson);

function obtenerDatosJson() {
    const url = "data/empleado.json";

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la solicitud: " + response.status);
        } else {
            return response.json();
        }
    })
    .then(data => {
        console.log("Datos obtenidos:", data);
        // Aquí puedes manipular el objeto JSON como desees
        mostrarHTML(data);
    });
}

function mostrarHTML(data) {
    const lista = document.querySelector(".lista");
    const li = document.createElement("li");
    li.classList.add("items", "green");
    li.textContent = `Nombre: ${data.nombre}, Empresa: ${data.empresa}, Trabajo: ${data.trabajo}`;
    lista.appendChild(li);
}


// Array 

const cargarJsonArray = document.getElementById("cargarJsonArray");
cargarJsonArray.addEventListener("click", obtenerDatosJsonArray);

function obtenerDatosJsonArray() {
    const url = "data/empleados.json";

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la solicitud: " + response.status);
        } else {
            return response.json();
        }
    })
    .then(data => {
        console.log("Datos obtenidos:", data);
        // Aquí puedes manipular el array JSON como desees
        mostrarHTMLArray(data);
    });
}

function mostrarHTMLArray(data) {
    const lista = document.querySelector(".lista");
    data.forEach(empleado => {
        const li = document.createElement("li");
        li.classList.add("items");
        li.textContent = `Nombre: ${empleado.nombre}, Empresa: ${empleado.empresa}, Trabajo: ${empleado.trabajo}`;
        lista.appendChild(li);
    });
}