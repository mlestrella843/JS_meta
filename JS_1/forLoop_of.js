// const colors = ['red','orange','yellow']
// for (var color of colors) {
//     console.log(color);
// }


var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}