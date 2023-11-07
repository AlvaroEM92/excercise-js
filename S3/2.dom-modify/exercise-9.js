var parrafo = document.createElement("p");
parrafo.textContent = "Voy dentro!";

// Obtén todos los elementos con la clase .fn-insert-here
var elementosAInsertar = document.querySelectorAll(".fn-insert-here");

// Itera a través de los elementos y agrega el párrafo a cada uno
elementosAInsertar.forEach(function(elemento) {
    elemento.appendChild(parrafo.cloneNode(true));
});