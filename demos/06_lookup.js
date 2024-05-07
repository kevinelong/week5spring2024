let oldList = [ //array of objects
    {id:1001, name:"AAA"},
    {id:2002, name:"BBB"},
    {id:3003, name:"CCC"},
];

//TEST TASK: find and then show the name of item with id of 2002
//Loop!
for(item of oldList){
    if(item.id == 2002){
        console.log(item.name)
    }
}

// EASIER WAY? FASTER WAY?
//no loop
let newData = { //object of objects
    1001 : {id:1001, name:"AAA"},
    2002 : {id:2002, name:"BBB"},
    3003 : {id:3003, name:"CCC"},
};
console.log(newList[2002].name);

//TODO how to convert oldList to newData
function listToObject(list, keyProperty){
    let output = {};
    //TODO
    //...
    return output;
}
const dictOfIds = listToObject(oldList, "id");