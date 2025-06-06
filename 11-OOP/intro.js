// Introduction to Object-Oriented Programming (OOP) in JavaScript
// OOP is a programming paradigm that uses "objects" to design software.
// Objects are collections of properties and methods that represent real-world entities.
// In JavaScript, objects can be created using object literals, constructors, or classes.

// Class declaration
/*const for expression*/class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    mostrarInfo(){
        return `Hi! My name is ${this.name} and I'm ${this.age} years old.`;
    }
    static saludar(){
        return 'Hello!';
    }

}
const david = new Person('David', 24);
console.log(david.mostrarInfo()); // Output: Person {}
console.log(Person.saludar()); // Output: Hello!

// Inheritance allows a class to inherit properties and methods from another class.
class Student extends Person {
    constructor(name, age, major){
        super(name, age); // Call the constructor of the parent class
        this.major = major;
    }

    mostrarInfo(){
        return `${super.mostrarInfo()} I study ${this.major}.`;
    }
}
const maria = new Student('Maria', 22, 'Computer Science');
console.log(maria.mostrarInfo()); // Output: Hi! My name is Maria and I'm 22 years old. I study Computer Science.