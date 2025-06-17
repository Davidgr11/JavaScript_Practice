window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('Conectado a Internet');
    }else{
        console.log('Desconectado de Internet');
    }
}