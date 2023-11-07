const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

/*let ul$$ = document.createElement('ul');
document.body.appendChild(ul$$);*/

/*for ( let i = 0; i<countries.length ; i++){
        const li$$ = document.createElement('li');
        li$$.textContent = countries[i];
        ul$$.appendChild(li$$);
        console.log(li$$);
}*/
/*------------------------------------------------------------------*/

    // Crear una lista desordenada si no existe
    let lista = document.getElementById('miLista');
    if (!lista) {
        lista = document.createElement('ul');
        lista.id = 'miLista';
        document.body.appendChild(lista);
    }

    // Agregar los países a la lista
    countries.forEach(function (pais) {
        var nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = pais;
        lista.appendChild(nuevoElemento);
        console.log(pais); // Imprimir el país en la consola
    });

/*-----------------------------------------------------------------------*/

    /*for(countrie of countries) {
        var nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = countrie;
        lista.appendChild(nuevoElemento);
        console.log(countrie); // Imprimir el país en la consola
    };*/
