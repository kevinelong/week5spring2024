
//array of arrays
let grid = [
    [".", ".", "."],
    [".", "X", "."],
    ["?", ".", "O"],
];

console.log(grid[1][1]) //X
console.log(grid[2][2]) //O?

grid[2][0] = "X" //replace ? with X

grid[0][2] = "O" //block the Xs with an O

row = grid[1]
col = row[1]
console.log(col)

//console.log(grid) //not pretty
for (row of grid) {
    //console.log(row);
    //console.log(row[0], row[1], row[2], )

    // for (let c = 0; c < row.length; c++) {
    //     console.log(row[c])
    // }

    //opposite of split()
    console.log(row.join(" "))
}
/// HOW TO BUILD 26 columns 1000 rows like google sheets
let sheet = []
//rows first how to add 1000
//loop
for (let r = 0; r < 1000; r++) {
    let row = []; //array()
    for(let c = 0; c < 26; c++){
        row.push(".")
    }
    sheet.push(row)
}
sheet[999][25] = "X" //X in bottom right corner
console.log(sheet.length)
console.log(sheet[0].length)

let rowNumber = 1;
//print A through Z without typing one by one?
// 0-25?
// 65-91?
const letterList = ["  "];
for(letter=0; letter < 26; letter++){
    alpha = String.fromCharCode(letter + 65)
    letterList.push(alpha)
}
console.log(letterList.join("  |  "))

for (let row of sheet) {
    console.log(rowNumber.toString().padStart(4, " ") + "|", row.join("  |  "));
    rowNumber++; // rowNumber = rowNumber + 1
}