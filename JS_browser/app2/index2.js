const target = document.querySelector('body');

function handleClick(){
    console.log('Clicked on the body!');
}

target.addEventListener('click', handleClick);