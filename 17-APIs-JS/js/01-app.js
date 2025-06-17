const notificarBtn = document.getElementById('notificar');
notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        console.log(permission);
        permission = 'granted';
        console.log('Permiso de notificación concedido:', permission);

        if (permission === 'granted') {
            const notification = new Notification('¡Hola!', {
                body: 'Esta es una notificación de prueba.',
                icon: 'https://via.placeholder.com/150'
            });

            notification.onclick = () => {
                console.log('Notificación clickeada');
            };
        }
    });
});
