let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

//make sure all html is loaded
document.addEventListener("DOMContentLoaded", e => {
    //don't rely on html ids to become local variable
    // const menuElement = document.getElementById("menuElement");
    // const itemListElement = document.getElementById("itemListElement");

    //const key = menuElement.value;
    //const stringList = menu[key]; //use square bracket to access list by key

    // let stringList = [];
    // if(menuElement.value == "drinks"){
    //     stringList = menu.drinks;
    // }else if(menuElement.value == "entrees"){
    //     stringList = menu.drinks;
    // }else if(menuElement.value == "desserts"){
    //     stringList = menu.desserts;
    // }

    // for(text of stringList){
    menuElement.addEventListener("change", e=>{
        itemListElement.innerHTML = ""; //remove old options

        for(let name of menu[menuElement.value]){ //direct access to the list based on value
            // const option = document.createElement("option");
            // option.innerText = name;
            // itemListElement.appendChild(option);
            itemListElement.innerHTML += `<option>${name}</option>`;
        }
    });// end of the  menu change handler
});//end loaded