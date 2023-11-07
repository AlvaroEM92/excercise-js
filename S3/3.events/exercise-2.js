// Obtén una referencia al elemento input
const inputs$$ = document.querySelectorAll("input");

// Agrega un manejador de eventos 'focus' al input
for ( input$$ of inputs$$){
      input$$.addEventListener("focus", checkValue );
}
    // Accede al valor del input y muestra en la consola
  function checkValue(e){
    const target$$ =e.target;
    console.log(this.value);
    console.log(target$$.value);
  }