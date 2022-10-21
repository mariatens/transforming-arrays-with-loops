/*
1a: Greetings
Challenge: Write a function that takes an array of names, and returns an array with a greeting for each of those names: "Hello, <name>!".
Example: ["Ash", "Beth", "Ciara"] -> ["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"]
*/

function greet(nameArr){
    let greetArr = []
    for (fName of nameArr){
        let greeting = `Hello, ${fName}`
        greetArr.push(greeting)
    }
    return greetArr
}

// test cases
console.log(greet(["Ash", "Beth", "Ciara"]),
        ["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"])
