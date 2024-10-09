function greet(name) {
    return `Hello, ${name}!`;
}

function logGreeting(fn, name) {
    console.log(fn(name));
}
// We pass the 'greet' function as an argument to 'logGreeting'
logGreeting(greet, 'Maria'); // Output: "Hello, Maria!"


//In this example, the higher-order function returns another function when called:
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}
let double = multiplier(2); // Returns a function that multiplies by 2
let triple = multiplier(3); // Returns a function that multiplies by 3

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15