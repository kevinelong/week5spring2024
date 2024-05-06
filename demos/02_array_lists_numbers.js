//COLLECTIONS PT 1 ARRAYS AKA lists
const subtotals = [12, 21, 33] // create literal array
console.log("LAST: ", subtotals[subtotals.length - 1]);

subtotals.push(300); //put one more on the stack
console.log("LAST: ", subtotals[subtotals.length - 1]);

let grandTotal = 0;
//how to add each one to the total?

for (let i = 0; i < subtotals.length; i++) {
    const value = subtotals[i]; //extract value
    grandTotal += value; //increase by value
    console.log(i, value, grandTotal) //display
}

console.log("GRAND TOTAL:", grandTotal); //366
