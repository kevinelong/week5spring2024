function printContact(c){
    //template string alternatives include, + concatenation, or multiple .logs() 
    console.log(`
        ${c.name}
        ${c.address}
        ${c.city}, ${c.state} ${c.zip}
`);
    // Pursalane Faye
    // 121 Main Street
    // Benbrook, Texas 76126
}
// TESTS
let myInfoX = {
    name : "Kevin Long",
    address : "123 Dandy Lane",
    city : "Portland",
    state : "OR",
    zip: 97007,
};

let myInfoY = {
    name : "Nina Marie",
    address : "456 Biana AVE",
    city : "Coumbia City",
    state : "OR",
    zip: 97018,
};

printContact(myInfoX);
printContact(myInfoY);
