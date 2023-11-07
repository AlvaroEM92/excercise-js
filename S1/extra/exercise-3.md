Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
```js
const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
```

for(let i=0 ; i<movies.length; i++){
    if(movies[i].durationInMinutes<100){
        lm.push(i);
        console.log(lm);
    }
    if(movies[i].durationInMinutes>=100 || movies[i].durationMinutes<200){
        mm.push[i];
    }
    if(movies[i].durationInMinutes>=200){
        hm.push[i];
    }
}
console.log(lm);

for(let i=0 ; i<movies.length; i++){
    let movie =movies[i];
    if(movie.durationInMinutes<100){
        lm.push(movie);
    }
    if(movie.durationInMinutes>=100 && movie.durationInMinutes<200){
        mm.push(movie);
    }
    if(movie.durationInMinutes>=200){
        hm.push(movie);
    }
}console.log(lm,mm,hm);


for( movie of movies){
    if( movie.durationInMinutes<100){
        lm.push(movie);
        
    }
    if( movie.durationInMinutes>=100 && movie.durationInMinutes<200 ){
        mm.push(movie);
       
    }
    if( movie.durationInMinutes>=200){
        hm.push(movie);
       
    }
}
console.log(lm,mm,hm);

for( movie of movies){
    if( movie.durationInMinutes<100){
        lm.push(movie);
        
    }
    if( movie.durationInMinutes>=100 && movie.durationInMinutes<200 ){
        mm.push(movie);
       
    }
    if( movie.durationInMinutes>=200){
        hm.push(movie);
       
    }
}
console.log(lm,mm,hm);