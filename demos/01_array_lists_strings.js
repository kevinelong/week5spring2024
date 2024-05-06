
//JAVASCRIPT ARRAYS(AKA lists)

fruit = [] //array literal - empty

fruit = ["apple", "banana", "cherry"]
console.log(fruit[2]) //cherry

fruit.push("pear")
fruit.push("orange")
fruit.push("grape")

console.log(fruit.length); //6

console.log(fruit[fruit.length-1])//always last one
console.log(fruit)
console.log(fruit.pop()) //destructive
console.log(fruit[fruit.length-1])//always last one

for(let i = 0; i < fruit.length; i++){
    console.log(i, fruit[i])
}


// fruit = array(); //Constructor/Factory function explicit

// x = 123
// x = Number(123)
// d = Date()

// text = "ABC" //String Literal
// text = String("ABC"); //Constructor/Factory Function
