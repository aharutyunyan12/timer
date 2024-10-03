/*
function Person(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
}

const person = new Person ('Hovhannes', 'Kocharyan', 28)

console.log(person)

Person.prototype.sayHi = function () {
    return this.name + '' + this.surname
}
*/

class Person {
    constructor(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
    }

    sayHi() {
        return this.name + ' ' + this.surname
    }
    //method1
    //method2
}
const person = new Person ('Hovhannes', 'Kocharyan', 28)


console.log(person)

console.log(person.sayHi())

console.log(person instanceof Person)