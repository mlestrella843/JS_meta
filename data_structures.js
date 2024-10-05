//***** Object */
// 1. Simple object with string keys
const person = {
    name: "Maria",
    age: 30,
    job: "Teacher",
  };
  
  // 2. Access properties using string keys
  console.log(person.name);  // Output: "Maria"
  console.log(person.age);   // Output: 30
  
  // 3. Leverage prototype inheritance (like using the toString method)
  console.log(person.toString());  // Output: "[object Object]"
  console.log("\n");

  //* Use de Map ******///
  // Create a new Map to store items and their quantities
const storeInventory = new Map();

// Add items to the inventory
storeInventory.set('Apples', 50); // Key is a string
storeInventory.set('Bananas', 100);
storeInventory.set('Oranges', 80);

// Check the quantity of a specific item
console.log(`We have ${storeInventory.get('Apples')} apples in stock.`); 
// Output: We have 50 apples in stock.

// Update the quantity of an item
storeInventory.set('Apples', 40); // Adjust the quantity
console.log(`Updated stock: ${storeInventory.get('Apples')} apples now.`); 
// Output: Updated stock: 40 apples now.

// Remove an item from the inventory
storeInventory.delete('Oranges'); 
console.log(storeInventory.has('Oranges')); // Output: false (Oranges removed)

// Loop through the Map to list all items in the store
for (const [item, quantity] of storeInventory) {
  console.log(`${item}: ${quantity} in stock`);
}
// Output:
// Apples: 40 in stock
// Bananas: 100 in stock

// Get the total number of items in the store
console.log(`We are tracking ${storeInventory.size} types of items.`);
// Output: We are tracking 2 types of items
console.log("\n");