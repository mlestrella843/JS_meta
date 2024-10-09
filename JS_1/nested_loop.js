// var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < cubes.length; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }

// Challenge

// for( var i = 1; i <= 10; i++ ){
//     if( i == 1){
//         console.log('Gold Medal');
//     }else if( i == 2){
//         console.log('Silver Medal')
//     }else if( i == 3){
//         console.log('Bronze Medal');
//     }else{
//         console.log(i);
//     }
// }

//Challenge with Switch

for( var i = 1; i <= 10; i++ ){
    switch(i){
        case 1:
            console.log('Gold Medal');
            break;
        case 2: 
            console.log('Silver Medal');
            break;
        case 3:
            console.log('Bronze Medal');
            break;
        default:
            //this block will run if no condition matches
            console.log(i)
    }
   
}


