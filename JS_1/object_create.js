const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar  = Object.create(car);
sportsCar.speed = 'fast';
console.log(`The sportCar Object : ${sportsCar}`); 

//-------Iterating over Object----------------


console.log("\nfor of is reliable ");
    for (prop of Object.keys(car)) {
        console.log( prop + " 🎯 " + car[prop]);
}

console.log("\nfor of is reliable ");
    for (prop of Object.keys(sportsCar)) {
        console.log( prop + " 🎯 " + sportsCar[prop]);
}


//**** for in  */
console.log("\nfor in is reliable ");
for( prop in sportsCar){
    console.log(' 🤔 ', prop);
}
