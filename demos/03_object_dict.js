//OBJECTS - KEYS AND VALUES like words and defs in a dict
let productCodes = { aaa: "Apple", bbb: "Banana", ccc: "Cherry" };

productCodes["ggg"] = "Grape"; //add one more key value pair

// delete productCodes.bbb;
delete productCodes["bbb"];

//accessing by key using square bracket
let key = "ggg";
let value = productCodes[key]
console.log(value);

//accessing by key using dot-notation
console.log(productCodes.ccc) //Cherry, dot-notation

// looping requires a list, but we can get a list of keys.
const keyList = Object.keys(productCodes);
console.log(keyList);
for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i]; //get the key
    const value = productCodes[key]; //use the key
    console.log(i, key, value)
}

const kevin = { firstName: "Kevin", lastName: "Long" };
kevin.age = 56; //add new kay value pair using dot notation

console.log(kevin.firstName, kevin.lastName, kevin.age);

function displayPerson(p) { //receive data into local var p
    return `
        ${p.lastName}, ${p.firstName} (${p.age})
    `;
}

const dandy = { firstName: "Dandy", lastName: "Yankee Poodle", age: 3 };
console.log(displayPerson(kevin)); //pass argument from person
console.log(displayPerson(dandy));
