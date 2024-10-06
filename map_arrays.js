const numbers = [1, 2, 3, 4, 5];

// Using map() to create a new array with doubled values
const doubledNumbers = numbers.map(function(num) {
    return num * 2; // Multiply each number by 2
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]