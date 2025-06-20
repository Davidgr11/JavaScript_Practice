// Ejemplo de Try catch
console.log("Inicio del programa");
try {
    hola();
} catch (error) {
    console.error("Error capturado:", error.message);
}
console.log("Fin del programa");


/* Reglas importantes
- Solo puedes usar await dentro de una función async.
- Siempre usa try...catch para manejar errores.
- await espera que una promesa se resuelva o rechace.
*/

async function obtenerDatos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log("Datos:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
obtenerDatos();


// Ejemplo completo donde te ahorras el encadenamiento de promesas con then
async function obtenerPosts() {
  try {
    const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post1 = await res1.json();

    const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const post2 = await res2.json();

    console.log('Post 1:', post1);
    console.log('Post 2:', post2);
  } catch (err) {
    console.error('Hubo un error:', err);
  }
}
obtenerPosts();


const obtenerPosts2 = async () => {
  try {
    const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post1 = await res1.json();

    const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const post2 = await res2.json();

    console.log('Post 1:', post1);
    console.log('Post 2:', post2);
  } catch (err) {
    console.error('Hubo un error:', err);
  }
}
obtenerPosts2();

