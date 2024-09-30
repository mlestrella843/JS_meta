console.log('Hello');

function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog('hola');

//Now I'll code another function that builds an object with a specific value:
function objectMaker(val) {
    return {
        prop: val
    }
}
console.log(objectMaker(20));

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total);