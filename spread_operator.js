//*Example 1: Using Spread Operator with Arrays

const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

// Spread operator to combine arrays
const combinedNumbers = [...numbers, ...moreNumbers];

console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]


//*Example 2: Using Spread Operator to Copy an Array

const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];  // Creates a new copy of the array

copiedArray.push(40);

console.log(originalArray);  // Output: [10, 20, 30] (original remains unchanged)
console.log(copiedArray);    // Output: [10, 20, 30, 40] (copied array modified)

//*Example 3: Using Spread Operator with Objects (Magnifico!!!!)

const person = {
    name: 'John',
    age: 25
};

const contactInfo = {
    email: 'john@example.com',
    phone: '123-456-7890'
};
// Spread operator to merge objects
const fullPersonInfo = { ...person, ...contactInfo };
console.log(fullPersonInfo);
// Output: { name: 'John', age: 25, email: 'john@example.com', phone: '123-456-7890' }

//*Example 4: Using Spread Operator in Function Arguments

function sum(x, y, z) {
    return x + y + z;
}

const numbers2 = [1, 2, 3];

// Spread operator to pass array elements as individual arguments
console.log(sum(...numbers2));  // Output: 6
