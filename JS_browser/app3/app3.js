let answer = prompt('What is your name?');


if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
    console.log("The first block was executed");
    
}

const h2 = document.createElement('h2')
    h2.innerText = "Type into the input to make this text change"

const input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    console.log(input.value)
    console.log("The second block was executed");
})