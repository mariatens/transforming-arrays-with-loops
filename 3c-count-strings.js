// Write a function that takes an array of strings, and returns an array with the number of characters in each string.

function countStr(strArr){
    let numArr = []
    for (word of strArr){
        numArr.push(word.length)
    } 
    return numArr
}


// test case
console.log(countStr(["one", "two", "three", "four"]),[3, 3, 5, 4])

// using map
//transforming function 
function count(str){
    return str.length
    }

//passing map
function countAr(arr){
    return arr.map(count)
}
//test case
console.log(countStr(["one", "two", "three", "four"]),[3, 3, 5, 4])