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

class Dev extends Person{
    constructor(name, age, company,salary,language){
        super(name,age);
        this.company = company;
        this.salary = salary;
        this.language = language;
    }
    sayHi(){
        console.log(`Hi, I'm ${this.getName()} and I'm working at ${this.company} and earn ${this.salary} per month. I'm learning ${this.language}`);
    }
}

let programmer = new Dev("Pedro",19,"Google","$100000","JavaScript");
programmer.sayHi();
