
//Use Case:
// map() is a method used to transform arrays
//You would use this approach when you want to transform an array of values and
// return a new array, such as modifying elements, converting data types, etc.

const numbers = [1, 2, 3, 4, 5];

// Using map() to create a new array with doubled values
const doubledNumbers = numbers.map(function(num) {
    return num * 2; // Multiply each number by 2
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


