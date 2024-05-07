let menu = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},
    // ...
];

//get just drinks
let drinks = [];

//loop through all
for(let i = 0; i < menu.length; i++){
    const line = menu[i];
    //if is drink
    if(line.category == "Drink"){
        //then store
        drinks.push(line);
    }//end if
}//end for

console.log(drinks)