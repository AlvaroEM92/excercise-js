const movies = [{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad",durationInMinutes: 225},
{name: "Origen", durationInMinutes: 165},
{name: "El señor de los anillos", durationInMinutes: 967},
{name: "Solo en casa", durationInMinutes: 214},
{name: "El jardin de las palabras", durationInMinutes: 40}];

let lm = [];
let mm = [];
let hm = [];


for ( movie of movies){
    if (movie.durationInMinutes < 100){
        lm.push(movie);
    }
    if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200 ){
        mm.push(movie);
    }
    if (movie.durationInMinutes > 200){
        hm.push(movie);
    }

}console.log(lm,mm,hm);