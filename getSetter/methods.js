const object = {
    _name: 'Hovhannes',
    _surname: 'Khocharyan',
    sayHi: function () {
        return `Hello, ${object.name} ${object.surname}`
    },
    
    getName() {
        return `${object.name} ${object.surname}`
    },

    setName(name) {
        if (name.length >= 4) object.name = name
    },
    
   get name() {
    return `${object._name} ${object._surname}`
   },
   set name(value) {
    if (value.length >= 4) object._name = value
   }
    
}

console.log(object.name)


Object.defineProperty(object, 'name', {
    value: 'Hovhannes',
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(object)