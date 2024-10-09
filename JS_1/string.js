//In some of the examples that follow, for the sake of clarity, instead of using a variable name, I'll use the string itself.
//All strings have at their disposal several built-in properties, but there's a single property that is really useful: the length property, which is used like this://

const greet = "hello";
console.log(greet.length);// 5

//To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:  //
console.log(greet.charAt(0)); // 'H'

//The concat() method joins two strings:  
console.log("Wo".concat("rl").concat("d")); // 'World'

//The indexOf returns the location of the first position that matches a character: 
console.log("ho-ho-ho".indexOf('h')); // 0
console.log("ho-ho-ho".indexOf('o')); // 1
console.log("ho-ho-ho".indexOf('-')); // 2

//lastIndexOf and indexOf work in JavaScript. Both methods search for a specified 
//value in an array or string, but indexOf finds the first occurrence, while lastIndexOf 
//finds the last occurrence.
var numbers = [1, 2, 3, 2, 4, 2, 5];

// Using indexOf
var firstIndex = numbers.indexOf(2);
console.log(firstIndex); // Output: 1

// Using lastIndexOf
var lastIndex = numbers.lastIndexOf(2);
console.log(lastIndex); // Output: 5



//The split method chops up the string into an array of sub-strings:
console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho'])

//There are also some methods to change the casing of strings. For example:  
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "