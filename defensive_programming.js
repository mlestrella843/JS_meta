//Defensive programming is all about assuming that all the arguments a function will 
//receive are of the wrong type,  the wrong value or both.

function letterFinder(word, match) {

    let condition1 = typeof(word) == 'string' && word.length >= 2;
    let condition2 = typeof(match) == 'string' && match.length == 1.

    if(condition1 && condition2 == true){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }else{
        console.log('Please pass correct arguments to the function.');
    } 
}
letterFinder('John','o');
