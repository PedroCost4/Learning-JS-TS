const people = [
    {
        name: 'Bob',
        age : 20,
        position : 'developer'
    },
    {
        name: 'Anna',
        age : 25,
        position : 'designer' 
    },
    {
        name: 'Susy',
        age : 30,
        position : 'the boss'
    },
    {
        name: 'John',
        age : 35,
        position : 'intern'
    }
]


const getAges = (people) => people.age;
const ages = people.map(getAges);

console.log(ages);

const newPeople = people.map((item) => {
    return {
        firstName:item.name.toUpperCase(),
        oldAge:item.age + 20,
        position:item.position + " senior"
    }
})
console.log(newPeople)

const name = people.map((item) => `<h2> ${person.name}} </h2>`);
const result = document

