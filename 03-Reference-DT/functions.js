console.info("---FUNCTIONS---"); // Reusable block of code

//Function declaration
console.info("*Function Declaration*");
console.log(greet("Jason"));
function greet (name) {
    return `Hi ${name}`;
};

// Function Expression (when assigning functions to variables)
console.info("*Function Expression*");
const sum1 = function(a, b){
    return `La suma de ${a} + ${b} es ${a+b}`;
}
console.log(sum1(1,4));

// String Functions
console.info("*String Functions*");
startApp();
function startApp(){
    console.log("Starting App");
    secondFunction();
}
function secondFunction(){
    console.log("Second Function");
    userAuth("Mark");
}
function userAuth(userName){
    console.log(`User logged: ${userName}`);
}

// Value Returning Functions
console.info("*Value Returning*");
let total = 0;
function addValue(price){
    return total += price;
}

total = addValue(100), addValue(200), addValue (200);
console.log(total);

// Currying (sequence of functions, each takes a single argument, used for reusability)
console.info("*Function Currying*");
const curriedMultiply = (a) => (b) => a*b;
console.log(curriedMultiply(3)(4));

// Composition (break down a complex problem)
console.info("*Function Composition*");
const add5 = (num) => num + 5;
const triple = (num) => num * 3;
const compose = (f,g) => (x) => f(g(x));
const result = compose (triple, add5); //define the functions that are on the compose function
console.log(result(2)); // 2+5 = 7*3 = 21

// Blinding (this context, keep the intended reference)
const reproducer = {
    name : "We are the champions",
    playSong : () => {
        console.log(`Reproducing ${this.name}`);
    }
};

reproducer.playSong(); // undefined
