
function concatString( stringA, stringB){
    console.log( stringA + stringB);

}
concatString("Hello ", "World!");//Expected: Hello World!
concatString(1,2);// Expected: 12, but here the numbers are added.

expect(concatString("Hi ", "my friends, how are you?")).toBe("Hi my friends, how are you?");
expect(concatString(1,2)).toBe(12);