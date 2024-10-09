var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
fruits.push('mango');

console.log(fruits);

//To remove the last item from an array, I can use the pop() method:  
fruits.pop();
console.log(fruits); // ['mango']

//I can now build a function that takes all its arguments and pushes them into an array, like this: 
function addFruit(fruit, fruits){
    fruits.push(fruit);
    console.log(fruits);
}
addFruit('banana', fruits);
addFruit('tamarindo', fruits);
addFruit('kiwi', fruits );
addFruit('grapes', fruits);