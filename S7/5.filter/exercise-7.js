const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

/*const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
input$$.addEventListener('input',function (streamSearch){
    const loQueBusco = streamSearch.target.value;
    const resultados = streamers.filter(streamer =>streamer.name.includes(loQueBusco));

    console.log(resultados);
});*/


/*const objetos = [
    { id: 1, name: "Manzana" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cereza" },
    { id: 4, name: "Durazno" },
    { id: 5, name: "Uva" }
  ];*/
  
  /*const campoDeFiltro = document.querySelector('[data-function="toFilterStreamers"]')
  
  campoDeFiltro.addEventListener("input", function() {
    const filtro = campoDeFiltro.value;
  
    const resultadosFiltrados = streamers.filter(streamer => streamer.name.includes(filtro));
  

    console.log(resultadosFiltrados);
  });*/


  const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
input$$.addEventListener('input', showStreamers);


function showStreamers(){
  const inputValue = this.value;
  const filteredStreamers = streamers.filter(function(streamer){
    return streamer.name.includes(inputValue);
  });
  console.log(filteredStreamers);
};



