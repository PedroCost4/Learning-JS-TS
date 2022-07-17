const staff = [
    { name: 'John', age: 20, position:'Dev', salary: 1000 },
    { name: 'Anna', age: 25, position:'Designer', salary: 2000 },
    { name: 'Susy', age: 30, position:'Boss', salary: 3000 },   
    { name: 'John', age: 35, position:'Intern', salary: 4000 }
];

const dailysalary = staff.reduce((acc, cur) => {
    console.log(acc)
    console.log(cur.salary)
    acc += cur.salary
    return acc
} , 0)

console.log(dailysalary)