//function that takes an array as input and display all items of this array
// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(i+1, arr[i])
//     }
// }
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);

//Write a function named letterFinder that accepts two parameters: word and match.

function letterFinder(word, match){
    for (var i = 0 ; i < word.length ; i++ ){
        if (word[i] == match){
            console.log('Found the', match, 'at', i)
        }else{
            console.log('---No match found at', i)
        } 
    }
}
letterFinder('hello', 'e');

