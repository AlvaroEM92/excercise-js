var parrafo = document.createElement('p');
parrafo.textContent = 'Voy en medio!';


var div2 = document.getElementById('div2');

div2.parentNode.insertBefore(parrafo, div2);