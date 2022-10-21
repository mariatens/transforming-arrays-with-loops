//Write a function that takes an array of numbers, and returns an array with the same numbers, but signs flipped.

function invNum(arr){
    let invArr = []
    for (num of arr){
        let newNum = num * -1
        invArr.push(newNum)
    }
    return invArr
}

//test case
console.log(invNum([1, -3, 2, 8, -10]),[-1, 3, -2, -8, 10])