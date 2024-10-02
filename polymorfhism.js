const bicycle = {
    bell: function() {
        return console.log("Ring, ring! Watch out, please!");
    }
}
const door = {
    bell: function() {
        return console.log("Ring, ring! Come here, please!");
    }
}

bicycle.bell(); // "Get away, please"
door.bell(); // "Come here, please"

//********************* Another example */

// create your classes hereclass Bird {
    class Bird {
        useWings() {
            console.log("Flying!")
        }
    }
    class Eagle extends Bird {
        useWings() {
            super.useWings()
            console.log("Barely flapping!")
        }
    }
    class Penguin extends Bird {
        useWings() {
            console.log("Diving!")
        }
    }
    
    class Parrot extends Bird {
        useWings() {
            console.log("I have a super open and big eyes");
        }
    }
    
    var baldEagle = new Eagle();
    var kingPenguin = new Penguin();
    var owl1 = new Parrot();
    owl1.useWings();
    baldEagle.useWings(); // "Flying! Barely flapping!"
    kingPenguin.useWings(); // "Diving!"