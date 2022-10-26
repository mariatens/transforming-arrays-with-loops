//Write a function that takes an array of names (always <firstname> <surname> format) 
//and returns an array of initials for each person.

// function initial(nameArr){
//     let initialArr = []
//     for (str of nameArr){
//         for (letter of str){
//             if (letter == letter.toUpperCase()){
//                 initialArr.push(letter)
//             }
//         }
//     }
//     return initialArr.join(' ')
// }

// //test case
// console.log(initial(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), ["A.K.", "L.H.", "Y.M."])

// using map 
//transforming function 

function initials(name){
    let newStr = []
    for (let letter of name){
        if (letter !== letter.toLowerCase()){
            newStr.push(`${letter}.`)
            console.log(newStr)
        }
    }
    return newStr.join('')
}

console.log(initials("Ash Ketchum"))

//passing map 
function initialArr (arr){
    return arr.map(initials)
}

console.log(initialArr(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), ["A.K.", "L.H.", "Y.M."])