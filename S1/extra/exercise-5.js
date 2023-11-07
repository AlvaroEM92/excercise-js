const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];

let totalSellCount = 0;
let mediaSellCount= 0;

for ( product of products){
    totalSellCount += product.sellCount;
    mediaSellCount = totalSellCount/products.length;
}console.log(totalSellCount,mediaSellCount);