var car = {};
car.color = "red";
car["color"] = "green";
car["doors"] = 2;
car["speed"] = 200;
car["2022"] = 1901;
car.speed = 100;
car.doors = 4;
console.log(car); // {color: "green", speed: 100}

//building the object dynamically

// Simulating a form submission with dynamic fields
var formFields = {
    nameField: "fullName",    // We don't know upfront if this is 'name', 'firstName', etc.
    emailField: "emailAddress",
    ageField: "userAge"
};

// Data from the form
var formData = {
    fullName: "John Doe",
    emailAddress: "john@example.com",
    userAge: 30
};

// Creating an empty user object
var user = {};

// Dynamically building the user object based on form fields
user[formFields.nameField] = formData[formFields.nameField];
user[formFields.emailField] = formData[formFields.emailField];
user[formFields.ageField] = formData[formFields.ageField];

console.log(user);
// Output: { fullName: "John Doe", emailAddress: "john@example.com", userAge: 30 }

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}