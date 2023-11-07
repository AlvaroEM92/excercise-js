function findArrayIndex(array, text) {
    return array.indexOf(text);
    }


function removeItem(array, text){
    let index = findArrayIndex(array, text);
    array.splice(index,1);
    return array;
}


let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(findArrayIndex(animals,'Caracol'));
removeItem(animals, 'Caracol');
console.log(animals);