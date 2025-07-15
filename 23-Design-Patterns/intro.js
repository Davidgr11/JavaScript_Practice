// CLASS PATTERN

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Usage
const person1 = new Person('Alice', 30);
person1.greet();


// CONTRUCTOR PATTERN
// This pattern is used to create objects with a specific structure and behavior.
// Inheritance is often used to extend the functionality of the base object.

class Cliente extends Person {
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work at ${this.company}.`);
    }
}

const cliente1 = new Cliente('Bob', 25, 'TechCorp');
cliente1.greet();

// SINGLETON PATTERN
// This pattern ensures that a class has only one instance and provides a global point of access to it.

let instance = null;
class Car {
    constructor(brand) {
        if (!instance) {
            this.brand = brand;
            instance = this;
        } else {
            return instance;
        }
    }
}
const car1 = new Car('Toyota');
console.log(car1.brand); // Toyota
const car2 = new Car('Honda');
console.log(car2.brand); // Toyota, since it's the same instance


// FACTORY PATTERN
// This pattern is used to create objects without specifying the exact class of object that will be created.
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} says Woof!`);
    }
}
class Cat extends Animal {
    meow() {
        console.log(`${this.name} says Meow!`);
    }
}
class AnimalFactory {
    static createAnimal(type, name) {
        switch (type) {
            case 'dog':
                return new Dog(name);
            case 'cat':
                return new Cat(name);
            default:
                throw new Error('Unknown animal type');
        }
    }
}
// Usage
const dog = AnimalFactory.createAnimal('dog', 'Buddy');
dog.bark(); // Buddy says Woof!
const cat = AnimalFactory.createAnimal('cat', 'Whiskers');
cat.meow(); // Whiskers says Meow!


// MODULE PATTERN
// This pattern is used to encapsulate private variables and methods, exposing only what is necessary.
const Module = (() => {
    let privateVariable = 0;
    const privateMethod = () => {
        console.log('This is a private method');
    };

    return {
        publicMethod: () => {
            console.log('This is a public method');
            privateMethod();
        },
        setPrivateVariable: (value) => {
            privateVariable = value;
        },
        getPrivateVariable: () => {
            return privateVariable;
        }
    };
})();
// Usage
Module.publicMethod(); // This is a public method
Module.setPrivateVariable(42);
console.log(Module.getPrivateVariable()); // 42

// MIXIN PATTERN
// This pattern allows you to add properties and methods from one object to another, enabling code reuse.

const funcionesPersona = {
    saludar() {
        console.log(`Hola, mi nombre es ${this.name}`);
    },
    verificarEdad() {
        if (this.age >= 18) {
            console.log(`${this.name} es mayor de edad.`);
        } else {
            console.log(`${this.name} es menor de edad.`);
        }
    }
}

Object.assign(Person.prototype, funcionesPersona);
const persona2 = new Person('Carlos', 20);
persona2.saludar(); // Hola, mi nombre es Carlos
persona2.verificarEdad(); // Carlos es mayor de edad.

// NAMESPACE PATTERN
// This pattern is used to group related functions and variables together, avoiding global namespace pollution.
const restaurantApp = {};

restaurantApp.platillos = [
    { name: 'Pizza', price: 10 },
    { name: 'Pasta', price: 8 },
    { name: 'Salad', price: 5 }
]
restaurantApp.functions = {
    showMenu: (platillos) => {
        console.log('Menu:');
        platillos.forEach(item => {
            console.log(`${item.name}: $${item.price}`);
        });
    },
    addItem: function(name, price) {
        platillos.push({ name, price });
    }
}

const {platillos} = restaurantApp;


restaurantApp.functions.showMenu(platillos);
restaurantApp.functions.addItem('Burger', 6);
restaurantApp.functions.showMenu(platillos);
console.log(restaurantApp);


// MEDIATOR PATTERN
// This pattern is used to reduce the complexity of communication between multiple objects by introducing a mediator object.
class Mediator {
    constructor() {
        this.participants = {};
    }

    register(name, participant) {
        this.participants[name] = participant;
        participant.setMediator(this);
    }

    send(message, from, to) {
        if (this.participants[to]) {
            this.participants[to].receive(message, from);
        }
    }
}
class Participant {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    send(message, to) {
        console.log(`${this.name} sends: ${message}`);
        this.mediator.send(message, this.name, to);
    }

    receive(message, from) {
        console.log(`${this.name} received from ${from}: ${message}`);
    }
}
// Usage
const mediator = new Mediator();
const alice = new Participant('Alice');
const bob = new Participant('Bob');
mediator.register('alice', alice);
mediator.register('bob', bob);
alice.send('Hello Bob!', 'bob'); // Alice sends: Hello Bob!
// Bob received from Alice: Hello Bob!
bob.send('Hi Alice!', 'alice'); // Bob sends: Hi Alice!
// Alice received from Bob: Hi Alice!

// OBSERVER PATTERN
// This pattern is used to allow an object (the subject) to notify other objects (observers) about changes in its state.
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}
class Observer {
    constructor(name) {
        this.name = name;
    }

    update(message) {
        console.log(`${this.name} received: ${message}`);
    }
}
// Usage
const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notify('Hello Observers!'); // Observer 1 received: Hello Observers!
// Observer 2 received: Hello Observers!
// Remove an observer
subject.removeObserver(observer1);
subject.notify('Goodbye Observers!'); // Observer 2 received: Goodbye Observers!