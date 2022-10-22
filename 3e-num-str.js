// Write a function that takes an array of numbers and returns an array of plain objects, 
//with properties

function numToObj (numArr){
    let newArr = []
    for (let num of numArr){
        newArr.push({asNumber: num, asString: `${num}`})
    }
    return newArr
}

// test case
console.log(numToObj([4, -3.2]), 
[{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }])

//using map

//transforming function
function change(num){
    return {asNumber: num, asString: `${num}`}
}

//console.log(change(2))

//passing map function 
function changeArr(arr){
    return arr.map(change)
}
//test cases
console.log(changeArr([4, -3.2]), 
[{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }])