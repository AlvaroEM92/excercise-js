Usa un foin para imprimir por consola los datos del alienigena.
```js
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
```
for( const key in alien){
    console.log(key + ': ' +alien[key]);
}


for ( item in alien){
    console.log(item + ': ' + alien[item]);
}