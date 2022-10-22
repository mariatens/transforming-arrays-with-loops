// Write a function that takes an array of objects representing Pokémon, 
// with string properties name and type, and returns a descriptive sentence about them and their type: "<name> is a <type in lowercase> type Pokémon.".


function descPokemon(arr){
        let newArr = []
        for (obj of arr){
                let sent = obj.name + " is a " + obj.type.toLowerCase() + " Pokémon."
                newArr.push(sent)
        }
        return newArr
}


// test case
console.log(descPokemon([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]),
        ["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."])

// using map

//transforming function 
function text(obj){
        return obj.name + " is a " + obj.type.toLowerCase() + " Pokémon."
}

//passing map 
function objToText(objArr){
        return objArr.map(text)
}

//test cases
console.log(objToText([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]),
     ["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."])
