const h1 = document.querySelector('h1');

const arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
];

const handleClick = () => {
    switch(h1.innerText) {
        case arr[0]:  // Replace 'someValue' with the actual value you want to check
            h1.innerText = arr[1]; // Assuming arr[1] is what you want to assign to h1
            break; // Don't forget to add a break to avoid fall-through
        case arr[1]:
            h1.innerText = arr[2];
            break;       
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];; // Default case if no match is found
    }

}

h1.addEventListener('click', handleClick);