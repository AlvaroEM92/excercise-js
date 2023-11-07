const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
   return prompt(description);
}

function father(description, callback){
    userAnwsers.push(callback(description));
}



father("¿estás seguro?", confirmExample);
father("Escriba su nombre;", promptExample);

console.log(userAnwsers);