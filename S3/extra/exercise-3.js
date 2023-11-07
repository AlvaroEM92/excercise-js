const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const div$$ = document.querySelector('div[data-function="printHere"]');

/*const ul$$ = document.createElement('ul');
div$$.appendChild(ul$$);*/


/*-------------------------------------------*/



/*for (car of cars){
    const li$$ = document.createElement('li');
    li$$.textContent = car;
    ul$$.appendChild(li$$);
    
};*/


/*--------------------------------------------------*/

/*for ( let i = 0 ; i <cars.length ; i++){
      const li$$ = document.createElement('li');
      li$$.textContent = cars[i];
      ul$$.appendChild(li$$);
}*/



/*--------------------------------------------------*/

/*cars.forEach(function (car){
    const li$$ = document.createElement('li');
    li$$.textContent = car;
    ul$$.appendChild(li$$);
    
});*/

function addUl (array){
    const ul$$ = document.createElement('ul');
    div$$.appendChild(ul$$);
    for ( element of array){
        const li$$ = document.createElement('li');
        li$$.textContent = element; 
        ul$$.appendChild(li$$);
    }
}

addUl(cars); 










/*--------------------------------------------------*/