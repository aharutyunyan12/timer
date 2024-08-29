const person = {
    name: 'John',
    surname: 'Doe',
    age: 32,
    isAdult: true,
    stomach: ['apple', 'banana', 'orange'],
    hasChild: true
}

function getObjectValues(object = {}) {
    const values = []
    for (const keys in object) {
        values.push(object[keys])
    }
    return values
}

console.log(getObjectValues(person))
console.log(Object.values(person))