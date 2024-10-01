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

    constructor(color, legs, breed, sound){
        super( color, legs);
        this.breed = breed;
        this.sound = sound;
    }
    getSoundDog(){
        console.log(`The dog say ${this.sound}`);
    }
}

// var myDog = Object.create(Animal);
var myDog = new Dog("Black", 4, "German", "uwffff");
myDog.getSoundDog();
console.log (myDog);