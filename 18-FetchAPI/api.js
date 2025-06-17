const cargarAPI = document.querySelector("#cargarAPI");
cargarAPI.addEventListener("click", obtenerDatosAPI);

function obtenerDatosAPI(){
    const url = "https://picsum.photos/list";

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
        mostrarApi(data);
    });
}

function mostrarApi(data) {
    const lista = document.querySelector(".lista");
    data.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("items");
        li.innerHTML = `
        Autor: ${item.author}
        <a href="${item.post_url}" style="color:white;">Ver</a>
        `
        lista.appendChild(li);
    });
}