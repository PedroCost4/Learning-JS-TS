const fruits = ['apple', 'banana', 'orange', 'grape', 'strawberry', 'pear', 'mango'];
const [first,second, ...restofthefruits] = fruits;
console.log(first, restofthefruits);
const specificfruit = restofthefruits.find(fruit => fruit === 'orange');
console.log(specificfruit);


const person = {name: 'John', age: 20, lastName:"smith", job: 'developer'};
const {job,...rest} = person;

console.log(job, rest);



const getaverage = (name,...scores) => {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((acc, cur) => {return acc += cur },0 ) / scores.length;  
    console.log(average);
}

//getaverage(person.name, 10, 20, 30, 40, 50);


const testscores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

getaverage(person.name, ...testscores);

