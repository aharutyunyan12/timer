const human = {
    name: 'j',
    surname: 'f',
    age: 34,
    sayHi() {
        return `hello, my name is ${this.name} ${this.surname}, i'm ${this.age} y/o`
    },
}

console.log(human.sayHi())


const person = {
    name: "yfcue",
    surname: "kopddh",
    age: 28,
    __proto__: human,
}

console.log(person.sayHi())

function foo() {
    function res() {
        return this
    }
    res()
}

console.log(foo())


human.sayHi()




const human = {
    name: 'h',
    surname: 'f',
    age: 34,
    sayHi() {
        return `hello, my name is ${this.name} ${this.surname}, i'm ${this.age} y/o`
    },
}

const person = {
    name: "valod",
    surname: "kirakosyan",
    age: 56,
    foo: {
        sayHi: human.sayHi,
    },
}

const res = person.foo.sayHi.call(person)
const res2 = person.foo.sayHi.apply(person)
const newSayHi = person.foo.sayHi.bind(person)


console.log(newSayHi())



function fakeNew (c, ...args) {
    const newObject = {}
    newObject.__proto__ = c.prototype
    const res = c.apply(newObject, args)

    if (['object', 'function'].includes(typeof res || Array.isArray(res)))
        return true
}