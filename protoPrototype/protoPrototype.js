const human = {
    isHuman: true
}

const person = {
    name: 'jih',
    age: 20,
    isHuman: false,
    __proto__: human
}

const troll = {
    __proto__: human
}

console.log(person.isHuman)
console.log(troll.isHuman)


const arr = []

console.log(Function.prototype)

const str = new String('hello')

str.__proto__ = Array.prototype

console.log(str.map((item) => item + 2))

const h = {
    isHuman: true
}

const people = Object.create(h)

console.log(people.hasOwnProperty('isHuman'))
console.log('isHuman' in person)