Inserta dinamicamente en un html un div que contenga una p con javascript.


const newDiv = document.createElement('div');
newDiv.innerHTML = `<p>eyy</p>`;


document.body.appendChild(newDiv);
console.log(newDiv);