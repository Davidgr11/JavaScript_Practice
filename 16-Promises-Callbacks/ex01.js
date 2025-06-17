const countries = [];

const newCountry = pais => new Promise(resolve => {
    setTimeout(() => {
        countries.push(pais);
        resolve(`Nuevo país añadido: ${pais}`);
    }, 2000);
});

newCountry('Portugal')
    .then(result => { 
        console.log(result);
        return newCountry('Brasil');
    })
    .then(result => { 
        console.log(result);
        return newCountry('Argentina');
    })
    .then(result => { 
        console.log(result);
        console.log('Lista de países:');
        countries.forEach(country => {
            console.log(country);
        });
    });