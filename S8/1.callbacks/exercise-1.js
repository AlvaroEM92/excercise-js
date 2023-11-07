const numbersList = [];

function sum(a, b){
return a + b ;
}

function substract(a, b){
return a - b ;
}

function father(a, b, callback){
     numbersList.push(callback(a,b));
}

father(7, 8, sum);
father(1, 2, substract);
father(2, 3, sum);

console.log(numbersList);