
// }
// console.log('My program does not stop');

// try{

//     throw new ReferenceError();

// }catch(err){

//     console.log(err);
//     console.log('There was an error')

// }

// console.log('My program does not stop');


let userData;

try {
    // Simulating the process of fetching data
    userData = {
        name: "John Doe",
        email: "john@example.com"
    };

    // Now let's pretend we made a typo and tried to access a non-existent property
    console.log(userData.name);  // age is undefined, no error thrown

    // But here we try to access an undefined variable
    console.log(userData.age);  // This will throw a ReferenceError

} catch (err) {
    // Catching the ReferenceError
    console.log(err);  // Outputs ReferenceError: userAddress is not defined
    console.log('There was an error while accessing the user data.');
}
// Program continues
console.log('My program does not stop, even after the error');