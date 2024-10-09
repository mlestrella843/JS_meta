// class Animal { 
//     constructor( color, legs ){
//         this.color = color;
//         this.legs = legs;
//     }
//     getAnimal(){
//         console.log(this.color, this.legs);
//     }   
// }
// class Dog extends Animal{
//     constructor(color, legs, sound){
//         super( color, legs);
//         this.sound = sound;
//     }
//     getSoundDog(){
//         console.log(`The dog say ${this.sound}`);
//     }
// }
// // Create a new object using the prototype
// var myDog = Object.create(Dog);
// myDog.color = 'brown';
// myDog.legs = 4;

// console.log (myDog)



class Animal { 
    constructor( color, legs ){
        this.color = color;
        this.legs = legs;
    }
    getAnimal(){
        console.log(this.color, this.legs);
    }
    
}

class Dog extends Animal{
    constructor(color, legs, sound){
        super( color, legs);
        this.sound = sound;
    }
    getSoundDog(){
        console.log(`The dog say ${this.sound}`);
    }
}

class Chihuahua extends Dog{
    constructor(color, legs, sound, breed){
        super(color, legs, sound);
        this.breed = breed;
    }
    getBreed(){
        console.log(`The breed of my dog is ${this.breed}`);
    }

}

// var myDog = Object.create(Animal);
const myDog = new Dog("Black", 4, "woof");
const chihuahua = new Chihuahua("brown", 4, "woof", "Chihuahua");

myDog.getSoundDog();
chihuahua.getBreed();
console.log(chihuahua);
console.log (myDog);