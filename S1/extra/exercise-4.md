Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.
```js
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
```


let  totalSellCount=0;

for ( let i = 0; i<products.length; i++){
    totalSellCount+=products[i].sellCount;
    console.log(totalSellCount);
}

let totalSellCount =0;

for( let product of products){
    totalSellCount+=product.sellCount;
    console.log(totalSellCount);
}