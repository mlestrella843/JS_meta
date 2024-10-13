
const arrayObjects = [ 

{
    name: "Maria",
    lastName: "Star"
},

{
    name: "John",
    lastName: "Doe"
}

]
const printNames = (arrayObjects) => {
    arrayObjects.forEach(person => {
        console.log(`${person.name} ${person.lastName}`);
    })
}
printNames(arrayObjects);

console.log("\n");

// objects, using Object.keys

const persona1 = {
    name: "Julian",
    lastName: "Alvarez",
    age: 30
}

Object.keys(persona1).forEach((key) => {
    console.log(`${key}: ${persona1[key]}`);
})

console.log("\n");
//Objects, using for...in

const persona2 = {
    name: "Nicolas",
    lastName: "Garcia",
    age: 28
}

for (const key in persona2){
    console.log(`${key}: ${persona2[key]}`);
}