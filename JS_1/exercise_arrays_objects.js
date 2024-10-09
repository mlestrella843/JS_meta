const clothes = [];

function addClothes(clothe){
    clothes.push(clothe);
    console.log(clothes);
}

addClothes('T-Shirt');
addClothes('Hoodies');
addClothes('Skirt');
addClothes('Sport Clothes');
addClothes('jeans');

console.log(clothes);

const favCar = {
    color: "red",
    convertible: true,
}
console.log(favCar);

const favCar2 = {}
favCar2.color = "blue";
favCar2.convertible = false;
console.log(favCar2);

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()