// while (condition) {
//     // code to be executed
// }
let num = 1;
let i = 1;
while (i < 5) {
    num = num * 2;
    console.log(i, num);
    i++;
}
// OUTPUT
// 2 (i is 1 at the top of the loop / became 2 at the bottom)
// 4 (i is 2 at the top of the loop / became 3 at the bottom)
// 8 (i is 3 at the top of the loop / became 4 at the bottom)
// 16 (i is 4 at the top of the loop / became 5 at the bottom)