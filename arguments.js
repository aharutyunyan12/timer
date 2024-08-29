function foo(a = 55) {

    console.log(arguments)
    
    arguments[0] = 99

    console.log(a)
}

foo(10)