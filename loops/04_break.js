
//always in the last place you look?

const data = [
    { name: "kevin", age: 56 },
    { name: "bob", age: 16 },
    { name: "carol", age: 46 },
    { name: "ted", age: 76 },
    { name: "alice", age: 16 },
];

const RETIREMENT_AGE = 65;

//find first person who could retire
let i;
for(i=0; i < data.length; i++){
    const person = data[i];
    if(person.age >= RETIREMENT_AGE){
        console.log("FOUND AT:", i , " NAME: ", person.name);
        break; //exit loop early as we found our match
    }
}
console.log("LAST LOOKED AT:", i);
