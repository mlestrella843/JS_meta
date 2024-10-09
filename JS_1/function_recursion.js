let counter = 3
function example(){
    console.log('line '+  counter);
    counter--;
    if(counter === 0) return;
    example();
}
example();