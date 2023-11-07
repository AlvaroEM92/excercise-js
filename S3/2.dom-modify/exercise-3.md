Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.


var contenedor = document.getElementById('contenedor');
for(var i = 1 ; i <=6; i++){

    var parrafo = document.createElement('p');

    parrafo.textContent='parrafo' + i ;

    contenedor.appendChild(parrafo);

}console.log(contenedor);