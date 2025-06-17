const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono'); 

microfono.addEventListener('click', ejecutarSpeech);

function ejecutarSpeech() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const reconocimiento = new SpeechRecognition();

    reconocimiento.onstart = () => {
        salida.textContent = 'Escuchando...';
    };

    reconocimiento.onspeechend = () => {
        salida.textContent = 'Deja de hablar...';
        reconocimiento.stop();
    };

    reconocimiento.onresult = (e) => {
        const resultado = e.results[0][0].transcript;
        salida.textContent = `Texto: ${resultado}`;
    };

    reconocimiento.onerror = (e) => {
        console.error('Error:', e.error);
    };

    reconocimiento.start();
}