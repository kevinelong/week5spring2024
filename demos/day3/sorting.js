
const list = [
    { name: "durian", cost: "5.99" },
    { name: "Pineapple", cost: "9.99" },
    { name: "apple", cost: "13.99" },
    { name: "Banana", cost: "2.99" },
    { name: "cherry", cost: "1.99" },
]; //end list

function show(list) {
    for (item of list) {
        console.log(item)
    }
    console.log("")
}

//negative for less than, positive for greater, zero for the same
const numericComparison = (a, b) => Number(a.cost) - Number(b.cost);

function alphaCompparison(objectA, objectB) {
    
    const a = objectA.name.toUpperCase()
    const b = objectB.name.toUpperCase()

    if (a < b) { //less than
        return -1;          // negative
    } else if (a > b) { // greater than
        return 1;           // positive
    } else {
        return 0; //same AKA equal AKA zero
    }
}

list.sort(numericComparison);
show(list);

list.sort(alphaCompparison);
show(list);

