

const json_var = '{"greeting": "Hello Maria Luisa"}'
// convert JSON string to a JS object with .parse method.
const aPlainObj = JSON.parse(json_var);
console.log(aPlainObj);

// These data is in regular javascript object.
const dataPerson = {
    name: "Maria Luisa",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}
// Now, these data was converted into JSON format with stringify method
const jason_parse = JSON.stringify(dataPerson); 
console.log(jason_parse);