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

/*
Best Practice:
Use dot notation (obj.property) for known keys.
Use bracket notation (obj["property"]) when accessing dynamic keys.
*/