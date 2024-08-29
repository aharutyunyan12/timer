const person = {
    name: 'John',
    surname: 'Doe',
    age: 32,
    isAdult: true,
    stomach: ['apple', 'banana', 'orange'],
    hasChild: true
}

function getObjectKeys(object) {
    const keys = []

    for (const key in object){
        keys.push(key)
    }
    return keys
}

console.log(getObjectKeys(person))
console.log(Object.keys(person))
