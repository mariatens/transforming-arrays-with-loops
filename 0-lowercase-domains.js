// Write a function that takes an array of strings representing domain names, in mixed case, and returns an array of the domain names in all-lowercase.

/* pseudocode
function: lowerArray
params:
    - array
return: array
=====
let resultArray = []
for each item of array
    change item to lower case 
    push item to resultArray
end for 
return resultArray
*/



// test cases
console.log(lowerArray(["Google.com", "tWitTer.com"]), "should expect ['google.com', 'twitter.com]")
console.log(lowerArray(["mypersoNal@Email.cOm"]), "should expect ['mypersonal@email.com']")
