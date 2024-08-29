const obj = {
    a: 1,
    b: 2,
}

const obj2 = {
    c: 3,
    d: 5,
}

const obj3 = {
    d: 4,
}

const res = Object.assign(obj, obj2, obj3)

//obj = { ...obj, ...obj2, ...obj3 }

console.log(res)

const arr = [1, 2, 3]
const arr2 = [3, 4, 5]

Object.assign(arr, arr2)

console.log(arr)