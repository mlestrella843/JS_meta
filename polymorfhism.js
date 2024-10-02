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