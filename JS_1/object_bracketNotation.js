const property = "color";
const car = {};
car[property] = "blue";
console.log(car["color"]); // Output: blue

const house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

const house3 = {};
house3["pools"] = 5;
house3['color'] = "yellow";
house3['space'] = "30feet";
house3['address'] = "1724 26 ave SW, Calgary, AB, Canada";
console.log(house3);

//Combination of Dot and Bracket Notation:
//You can mix dot and bracket notations when working with objects.

var car2 = {};
car2.color = "red";          // Using dot notation
car2["brand"] = "Toyota";    // Using bracket notation
car2["model year"] = 2020;   // Special characters (space)
console.log(car2); // Output: {color: "red", brand: "Toyota", model year: 2020}