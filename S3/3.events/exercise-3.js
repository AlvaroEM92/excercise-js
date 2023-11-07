// Obtén una referencia al elemento input
const input$$ = document.querySelector("input");

// Agrega un manejador de eventos 'focus' al input
input$$.addEventListener('input', getValue); 
    // Accede al valor del input y muestra en la consola
  function getValue(){
  
  
    console.log(this.value);
};