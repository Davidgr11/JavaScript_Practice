// Promises 

function descargarArchivo() {
  return new Promise(resolve => {
    setTimeout(() => resolve("📥 Archivo descargado"), 3000);
  });
}

function procesarDatos() {
  return new Promise(resolve => {
    setTimeout(() => resolve("🧮 Datos procesados"), 2000);
  });
}

function guardarResultados() {
  return new Promise(resolve => {
    setTimeout(() => resolve("📝 Resultados guardados"), 1000);
  });
}

//Orden secuencial
async function ejecutarEnOrden() {
  console.log("🚦 Iniciando tareas en orden...");
  console.time("⏱️ Tiempo en orden");

  const paso1 = await descargarArchivo();
  console.log(paso1);

  const paso2 = await procesarDatos();
  console.log(paso2);

  const paso3 = await guardarResultados();
  console.log(paso3);

  console.timeEnd("⏱️ Tiempo en orden");
}


// Parallel order
async function ejecutarEnParalelo() {
  console.log("🚦 Iniciando tareas en paralelo...");
  console.time("⏱️ Tiempo en paralelo");

  const tarea1 = descargarArchivo();
  const tarea2 = procesarDatos();
  const tarea3 = guardarResultados();

  const [resultado1, resultado2, resultado3] = await Promise.all([
    tarea1,
    tarea2,
    tarea3
  ]);

  console.log(resultado1);
  console.log(resultado2);
  console.log(resultado3);

  console.timeEnd("⏱️ Tiempo en paralelo");
}

// Ejecutar las funciones
ejecutarEnOrden();
ejecutarEnParalelo();