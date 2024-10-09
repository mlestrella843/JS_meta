//1. Rest Operator in Function Parameters
/* 
Breakdown:
The initial value for acc is 1 (instead of 0), so the accumulation starts with 1.

First iteration:

acc starts at 1 (the initial value).
curr is the first element of the array, 1.
acc + curr becomes 1 + 1 = 2.
acc is now updated to 2.
Second iteration:

curr is now the second element, 2.
acc + curr becomes 2 + 2 = 4.
acc is now updated to 4.
Third iteration:

curr is now the third element, 3.
acc + curr becomes 4 + 3 = 7.
acc is now updated to 7.

*/
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 1);
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


const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);