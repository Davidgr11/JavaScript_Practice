const cargarTxtBtn = document.querySelector("#cargarTxt");
cargarTxtBtn.addEventListener("click", obtenerDatos);


function obtenerDatos() {
    const url = "data/datos.txt";

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la solicitud: " + response.status);
        }else{
            console.log(response);
            console.log(response.status);
            return response.text();
        }
    })
    .then(data => {
        console.log("Datos obtenidos:", data);

    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });
}