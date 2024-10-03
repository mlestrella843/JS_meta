const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar  = Object.create(car);
sportsCar.speed = 'fast';
console.log(`The sportCar Object : ${sportsCar}`); 

//-------Iterating over Object----------------


console.log("for of is reliable");
    for (prop of Object.keys(sportsCar)) {
        console.log( prop + " 🎯 " + sportsCar[prop]);
}


//**** for in  */
console.log("for in is reliable");
for( prop in sportsCar){
    console.log(' 🤔 ', prop);
}
