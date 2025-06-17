document.addEventListener('visibilitychange', () => {
    console.log('CHANGE');
    if (document.visibilityState === 'visible') {
        console.log('visible');
    }   else if (document.visibilityState === 'hidden') {
        console.log('oculta');
    }

});