// TASK 1
//Create a function called logDairy. Within it, console log each of the items in 
//the dairy array, using the for...of loop.
//After you create this function, call it as logDairy() to see the output on the console.


// const dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

// const logDairy = () => {
//     for (item of dairy) {
//         console.log(` item: ${item} \n`);
//     }
// }
// logDairy();
 

// // TASK 2
// //Create a function called birdCan, within it, loop over the bird object's properties 
// //and console log each one, using the for...of loop. Finally call the function as 
// //birdCan() to see the output on the console. Remember, you need to console log both 
// //the key and the value of each of the bird object's properties.

// const animal = {
//     canJump: true
// };

// const bird = Object.create(animal);

// bird.canFly = true;
// bird.hasFeathers = true;

// bird.birdCan = function() {
//     for (prop of Object.keys(bird)) {
//         // Check if the property is not a function before logging
//         if (typeof bird[prop] !== 'function') {
//             console.log(prop + " 🎯 " + bird[prop]);
//         }
//     }
// };


// // TASK 3
// //Using the same starter code as in task 2, create a function called `animalCan` and within it, 
// //loop over all the properties in both the bird object and its prototype - the animal object - 
// //using the for...in loop. Finally call the function as `animalCan()` to see the output on the console.

// bird.animalCan = function() {
//     for (let prop in bird) {
//         if (typeof bird[prop] !== 'function') {
//             if (bird.hasOwnProperty(prop)) {
//                 console.log(prop + " 🎯 " + bird[prop] + " (Own Property)");
//             } else {
//                 console.log(prop + " 🎯 " + bird[prop] + " (Inherited from Prototype)");
//             }
//         }
//     }
// }


// bird.birdCan();
// bird.animalCan();


//***** ESTA FUE LA MANERA EN QUE FUNCIONO EN LA PLATAFORMA */


var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {   
    for ( const items of dairy) {        
    console.log(items)
    }
}

logDairy();

// Task 2

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {   
    for (prop of Object.keys(bird)) {       
        console.log(`${prop}: ${bird[prop]}`); 
   }
}
birdCan();

// Task 3

function animalCan() {
    for (prop in bird) { 
       console.log(`${prop}: ${bird[prop]}`);
    }
}

animalCan();          




