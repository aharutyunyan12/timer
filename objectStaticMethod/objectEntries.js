const person = {
    name: 'John',
    surname: 'Doe',
    age: 32,
    isAdult: true,
    stomach: ['apple', 'banana', 'orange'],
    hasChild: true
}

function getObjectEntries(object = {}) {
    const entries = []
    for (const key in object){
        entries.push([key, object[key]])
    }
    return entries
}

console.log(getObjectEntries(person))
console.log(Object.entries(person))