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

//javascript implementation

function lowerArray(arr){
    let resultArray = []
    for (let item of arr){
        let lowItem  = item.toLowerCase()
        resultArray.push(lowItem)
    }
    return resultArray
}

// test cases
console.log(
        lowerArray(["Google.com", "tWitTer.com"]), 
        "should expect", ['google.com', 'twitter.com']
)

console.log(
        lowerArray(["mypersoNal@Email.cOm"]), 
        "should expect", ['mypersonal@email.com']
)

console.log(
	lowerArray(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),
	["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]
)

console.log(
	lowerArray(["m1a.tech", "example.cO.UK", "HTTPS://JavaScript.Info"]),
	["m1a.tech", "example.co.uk", "https://javascript.info"]
)

// example with .map
function inLowerCase(domainName) {
	return domainName.toLowerCase();
}

function lowercaseDomains(domainNames) {
	const cleanedDomains = domainNames.map(inLowerCase);
	return cleanedDomains; // or return the map call directly
}

// test cases with map 
console.log(
    lowercaseDomains(
        ["m1a.tech", "example.cO.UK", "HTTPS://JavaScript.Info"]),
	["m1a.tech", "example.co.uk", "https://javascript.info"]
    )