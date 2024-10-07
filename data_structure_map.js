//Map is a data structure used to store key-value pairs.
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

console.log(bestBoxers.get(1));

//Second example

// Create a new Map
let mixedDataMap = new Map();

// Using different types as keys and values
let objKey = { id: 1 }; // Object as key
let arrKey = [1, 2, 3]; // Array as key
let funcKey = function() { return "Hello"; }; // Function as key

// Setting values with different types of keys
mixedDataMap.set(objKey, "This is an object");
mixedDataMap.set(arrKey, "This is an array");
mixedDataMap.set(funcKey, "This is a function");
mixedDataMap.set(42, "This is a number"); // Number as a key
mixedDataMap.set('stringKey', "This is a string"); // String as a key

// Accessing the values using the keys
console.log(mixedDataMap.get(objKey));      // Output: "This is an object"
console.log(mixedDataMap.get(arrKey));      // Output: "This is an array"
console.log(mixedDataMap.get(funcKey));     // Output: "This is a function"
console.log(mixedDataMap.get(42));          // Output: "This is a number"
console.log(mixedDataMap.get('stringKey')); // Output: "This is a string"

// Display the entire Map
console.log(mixedDataMap);