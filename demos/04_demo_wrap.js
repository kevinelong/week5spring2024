//array of individual values
list = [] //empty array

//object of properties (key:value, pairs)
person = {} //empty object

//array
list = [32, 54, 76]; //define array literal
list.push(99) //add one more
console.log(list[1]) //54
//object
person = {name:"Kevin", age: 56}; //define object literal
person.color = "black" //add one more

//COMBINE FOR THE WIN
const catalog = [
    {product:"pencil", price: 1.99},
    {product:"tablet", price: 9.99},
];

console.log("BEGIN CATALOG.")
for(i=0; i < catalog.length; i++){
    console.log(catalog[i].price)
    console.log(catalog[i].product)
}
console.log("END CATALOG.")





