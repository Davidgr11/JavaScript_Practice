// Registro del Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registrado', reg))
      .catch(err => console.log('Error SW', err));
  });
}

// Lógica básica para el botón
document.getElementById('btn').addEventListener('click', () => {
  alert('¡Funciona incluso offline!');
});
