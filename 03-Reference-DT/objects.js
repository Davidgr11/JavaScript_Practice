"use strict";
console.info("---OBJECTS---");

let person = {
    name : "Alice",
    age: 25,
    skills: ["JavaScript", "React", "Node.js"],
    parents : {
        father : "Kylian",
        mother : "Lisa"
    },
    greet : function(){
        return `Hello, I'm ${this.name}`;
    }
}

// Access and validate information
console.log(person);
console.log(`Father is ${person.parents.father}`);
console.log(`Age is ${person["age"]}`);
console.log(person.greet());
console.log(person.hasOwnProperty("age"));
console.log("age" in person);

// Modifying and adding properties
person.age = 26; //update
person.country = "USA"; //add
delete person.skills; //delete
console.log(person);

// Destructing
const {age, parents : {mother}} = person;
console.log(`Destructing = age ${age} mother ${mother}`);

// Basic Methods (array)
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// Advanced Methods
Object.freeze(person) //no modifications allowed
Object.seal(person) //just update

let cloned = Object.assign({},person); //cloning
console.log(cloned);

let extraInfo = {partner: false}; //merging
let updatedPerson = {...person, ...extraInfo};
console.log(updatedPerson);

// CONSTRUCTOR
function Person(name, age, parents, greet){
    this.name = name;
    this.age = age;
    this.parents = parents;
    this.greet = greet;
}

const person1 = new Person("Jason", 50, {father: "Hall", mother : "Marth"}, function(){return `Hi world`});
console.log(person1);
console.log(person1.greet());

// Adding properties and methods to the prototype
Person.prototype.country = "Unknown"; //default property
Person.prototype.introduce = function() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
};


// DATE Object
const currentDate = new Date();
console.log(`Current Date: ${currentDate}`);

const specificDate = new Date(2023, 0, 1, 18, 30, 15); // January 1, 2023
specificDate.toDateString(); // Convert to date string
console.log(`Specific Date: ${specificDate}`);

const timestamp = Date.now();
console.log(`Timestamp: ${timestamp}`);

// Date methods
console.log(`Year: ${currentDate.getFullYear()}`);
console.log(`Month: ${currentDate.getMonth() + 1}`); // Months are 0-indexed
console.log(`Date: ${currentDate.getDate()}`);
console.log(`Day: ${currentDate.getDay()}`); // 0 = Sunday, 1 = Monday, etc.
console.log(`Hours: ${currentDate.getHours()}`);
console.log(`Minutes: ${currentDate.getMinutes()}`);

moment.locale('es-mx');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('LLL'));

/*
Best Practice:
- Use dot notation (obj.property) for known keys.
- Use bracket notation (obj["property"]) when accessing dynamic keys.
- Use `Object.freeze()` to prevent modifications if the object should remain constant.
- Use object literals for object creation when possible {} instead of new Object().
*/