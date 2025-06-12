// SETS: Un Set es una colección de valores únicos, no permite duplicados.
// Se pueden agregar, eliminar y verificar la existencia de elementos.
console.info("---Sets y Weaksets---");
// Create
const carrito = new Set();
// Add
carrito.add("Producto 1");
carrito.add("Producto 2");
console.log(carrito);
// Methods
console.log(carrito.size);
console.log(carrito.has("Producto 1"));
// Edit
carrito.add("Producto 1"); // No se agrega, ya existe
// Delete
carrito.delete("Producto 2");
carrito.add("Producto 3");
console.log(carrito);
// Clear
carrito.clear();
// Iterate
carrito.forEach(producto => {
    console.log(producto);
});
// Weaksets: Similar a un Set, pero permite almacenar objetos y no previene la recolección de basura.
const weakset = new WeakSet();
const obj1 = { id: 1 };
const obj2 = { id: 2 };
weakset.add(obj1);
weakset.add(obj2);
console.log(weakset); // WeakSet { <items unknown> }
console.log(weakset.has(obj1)); // true
console.log(weakset.has(obj2.id)); // true
// weakset.delete(obj1); // No se puede eliminar, no hay método delete
// weakset.clear(); // No se puede limpiar, no hay método clear
// Iterate: No se puede iterar sobre un WeakSet, no tiene métodos de iteración.