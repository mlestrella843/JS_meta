//1. Rest Operator in Function Parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3));        // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100

//2. Rest Operator in Array Destructuring

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Destructure the first two elements, and use the rest operator to capture the remaining ones
const [first, second, ...otherFruits] = fruits;

console.log(first);         // Output: "apple"
console.log(second);        // Output: "banana"
console.log(otherFruits);   // Output: ["cherry", "date", "elderberry"]

//3. Rest Operator in Object Destructuring

const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer',
    country: 'USA'
};

// Destructure name, and use the rest operator to capture the remaining properties
const { name, ...details } = person;

console.log(name);    // Output: "John"
console.log(details); // Output: { age: 30, occupation: 'Developer', country: 'USA' }

