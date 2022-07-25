class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.job = "unemployed";
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    setJob(job) {
        this.job = job;
    }
}

class Home {
    constructor(address,price,residents) {
        this.address = address;
        this.price = price;
        this.residents = residents;
    }

    getAddress() {
        return this.address;
    }
    getPrice() {
        return this.price;
    }
    getResidents() {
        return this.residents;
    }

    addResidents(resident) {
        this.residents.push(resident);
    }
}

const pedro = new Person("Pedro", 28);
pedro.setJob("programmer");

console.log(pedro);

let home = new Home("Calle de la casa", 100000, []);
home.addResidents(pedro);
console.log(home);