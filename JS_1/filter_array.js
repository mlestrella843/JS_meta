const numbers = [0,10,20,30,40,50];
console.log(numbers.filter( function(num) {
    return num > 20;
}));


// second example 
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter() to get only even numbers
const evenNumbers = numbers1.filter(function(num) {
    return num % 2 === 0; // Condition to check if the number is even
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]