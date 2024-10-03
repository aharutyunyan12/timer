// 1. imperative
const array = [1, 2, 3, 4]

const newArray = []

for(let i =0; i < array.length; i++) {
    newArray[i] = array[i] * 2
}

// 2. declarative -> functional programming
const str = 'cghjvhmch'

const res = str.split('').reverse().join('')

array.map((item) => item * 2)

// 3. object-oriented programming
// 3.1 inheritance 
// 3.2 encapsulation 
// 3.3 abstraction 
// 3.4 polymorphism 
    // 3.4.1 ad-hoc
        4 + 5 //9
        '4' + '5' // '45'
    // 3.4.2 parametric
    // for instance array.concat method
        5 - 4 //1
        '5' - 4 // 1
        5 - '4' // 1
        '5' - '4' //1
    // 3.4.3 subtypes
    function isPrimitiveType(value) {
        const primitiveTypes = ['string', 'number', 'boolean', 'undefined']
        return primitiveTypes.includes(typeof value)
    }
    function getResult(a, b, operator) {
        if (isPrimitiveType(a) || isPrimitiveType(b)) return a + b
        else if (Array.isArray(a) && Array.isArray(b)) return a.concat(b)
        else return {...a, ...b}
    }

//multi-paradigm (imperative and declarative)