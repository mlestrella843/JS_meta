function addTwoNumbers(a,b){
    try{
        if( (typeof(a) !== 'number')) {
            throw new ReferenceError('the first argument is not a number');  
        }   
        else if((typeof(b) !== 'number')) {
            throw new ReferenceError('the second argument is not a number');
        }
        else{
            console.log(a + b);
        }    
    }catch(err){
        console.log("Error!!! " , err);
    }        
    console.log('...but, it still works');
}
addTwoNumbers(5,"5");


