const arr = []
const arr2 = arr

console.log(Object.is(arr, arr2))

const arr3 = []
const arr4 = []

console.log(Object.is(arr3, arr4))


console.log(Object.is('f' / 5, 'g' * 4))