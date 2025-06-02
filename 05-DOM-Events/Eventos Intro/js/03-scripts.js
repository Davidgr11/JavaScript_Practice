const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("input", () => {
    if (busqueda.value === "") {
        console.log("El campo de búsqueda está vacío");
        return;
    }
    console.log(busqueda.value);
});