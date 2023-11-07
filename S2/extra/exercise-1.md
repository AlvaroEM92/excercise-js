Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función `.includes()`.

```js
let categorie=[]

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

for(movie of movies){
 categorie.push(movie.categories);
 console.log(categorie);
}
7
for(let movie of movies){
    if(movie.categories.includes('comedia','aventura','thriller','acción','animación')){
        categorie.push(movies[0].categories[0],movies[0].categories[1],movies[1].categories[1],movies[2].categories[1]);    
} 
}
console.log(categorie);
console.log(movies[3].categories[2]);


for(let movie of movies){
    if(movies[0].categories.includes('comedia','aventura','thriller','acción','animación')){
        categorie.push(movie.categories[0] + ' ' + movie.categories[1] );    
}  
}
console.log(categorie);
console.log(movies[3].categories[2])



for( movie of movies){
    let index = movies.indexOf(movie);
    if(movies[0].categories.includes('comedia')){
        categorie.push(movies[0].categories[0])
    }break;
}console.log(categorie);

for( movie of movies){
    let index = movies.indexOf(movie);
    if(movie.categories.includes('comedia')){
        categorie.push(movies.categories='comedia')
    }categorie.reduce('comedia');


    
}










console.log(categorie);




for  (movie of movies){
    for (category of movie.categories){
        if(!categorie.includes(category)){
            categorie.push(category);
        }
    }
}console.log(categorie);

