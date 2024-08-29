const persons = [
    {
        name: 'Davit'
    },
    {
        name: 'Samson'
    },
    {
        name: 'Ani'
    },
    {
        name: 'Lee'
    },
    {
        name: 'Ani'
    }
]

console.log(Object.groupBy(persons, (person) => person.name.length))