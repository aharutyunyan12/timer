//1 start/Hamazasp/end and sayTimeout

const sayHi = function(name = 'Guest') {
    console.log(`Hello, ${name}`)
}

console.log('start')

sayHi("Hamazasp")

console.log("end")

//

setTimeout(() => {
    sayHi("Hamazasp")
}, 5000)



//2 for instance 

addEventListener('keyup', () => {
    setTimeout()
})



//3 two variants
name = "Hakob"

setTimeout((name) => {
    sayHi(name)
}, 1000, 'Lilia')

//or

const timeoutId = setTimeout(sayHi, 1000, "Lilia")

setTimeout(() => {
    clearTimeout(timeoutId)
    console.log(`timeout with ${timeoutId} id has been cleared`)
}, 500)

const intervalId = setInterval(sayHi, 1000, "Hamazasp")

setTimeout(clearInterval, 2800, intervalId)



//4 start/end/sayHi

const sayHi1 = function(name = 'Guest') {
    console.log(`Hello, ${name}`)
}

console.log("start")

setTimeout(sayHi1, 0, "Lilia")

console.log("end")