Inserta dinamicamente en un html un div vacio con javascript.



const div$ =document.createElement('div');
div$.classList.add('pepe');
document.body.appendChild(div$);
console.log(div$);