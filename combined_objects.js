var car = {};
car.color = "red";
car["color"] = "green";
car["doors"] = 2;
car["speed"] = 200;
car.speed = 100;
car.doors = 4;
console.log(car); // {color: "green", speed: 100}