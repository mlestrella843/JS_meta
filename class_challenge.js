// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name,
        this.age = age,
        this.energy = energy
    }
    sleep() {
       this.energy  +=  10;
        return console.log(this.energy);
    }
    doSomethingFun() {
        this.energy -= 10;
        return console.log(this.energy);
    }
}

// Task 2: Code a Worker class

class Worker extends Person{
    constructor(name = "Bob", age = 21, energy = 110, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += + 10;
        return console.log(this.xp);
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    const intern = new Worker(name = "Bob", age = 21, energy = 110, xp = 0, hourlyWage = 10);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    const manager = new Worker(name = "Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;  
}

const person1 = new Person("Maria", 35, 150);

const worker1 = new Worker("Bob", 21, 110, 0, 10);
worker1.goToWork();
worker1.sleep();


person1.sleep();
person1.doSomethingFun();

intern();
manager();