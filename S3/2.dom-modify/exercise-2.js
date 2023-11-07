/*const div$$ = document.createElement('div');
div$$.innerHTML = "<p>hola</p>"
document.body.appendChild(div$$);




console.log(div$$);*/


const div$$ = document.createElement('div');
document.body.appendChild(div$$);

const p$$ = document.createElement('p');
p$$.textContent ='hola';
div$$.appendChild(p$$);



console.log(div$$);