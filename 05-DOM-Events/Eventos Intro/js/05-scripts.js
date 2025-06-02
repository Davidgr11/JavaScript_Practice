window.addEventListener('scroll', () => {
    console.log('Scrolling...');

    const scrollPx = window.scrollY;
    console.log(`Scrolled: ${scrollPx} pixels`);


    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);

    if(ubicacion.bottom < 900   && ubicacion.top > 0) {
        console.log('El elemento premium está visible');
    } else {        
        console.log('El elemento premium ya no está visible');
    }

});