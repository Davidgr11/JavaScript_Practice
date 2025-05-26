console.info("---CONDITIONAL STATEMENTS---"); // Allow decision making in code

// IF ELSE - TERNARY
console.info("*If - Else - Ternary Statements*");
let age = 18;

if(age < 18){
    console.log("You're a minor");
} else if (age >= 18 && age < 65){ // && , || operators
    console.log("You're an adult");
} else  {
    console.log("You're a senior")
}

let statusAge = age >= 18 ? "Adult": "Minor";
console.log(statusAge);
// Best Practice: Use ternary operators for simple conditions, but avoid nesting them.


// SWITCH STATEMENT
console.info("*Switch Statement*");

let grade = "B";
switch (grade){
    case "A": 
        console.log("Excelent grade");
        break;
    case "B":
        console.log("Good grade");
        break;
    case "C":
        console.log("Could be better");
        break;
    case "D":
        console.log("Needs improvement");
        break;
    default:
        console.log("Invalid grade");
    
}
// Use break; to avoid fall-through cases unless intentional.
// Use default: to handle unexpected values.


// LOOPS
console.info("---LOOPS || ITERATORS---"); // Allow repeating actions

// FOR LOOP (Use it when the iteration count is known)
console.info("*For*");
for (let i = 0 ; i < 5 ; i++){
    console.log(`Iteration ${i+1}`); // 1 2 3 4 5
}

// WHILE LOOP (Use it when the condition is unpredictable)
console.info("*While*");
let x = 5;
while(x > 0){
    console.log(x); // 5 4 3 2 1
    x--;
}

// DO WHILE (Use it when execution must occur at least once)
console.info("*Do while*");
let y = 0;
do {
    console.log(`Value: ${y}`); // 0 1 2 3 4
    y++;
}while(y<5);

// FOR EACH (Is the best and modern approach for arrays)
console.info("*For each*");
let friends = ["Karl", "Mario", "Lisa", "Patrick"];
friends.forEach(friend => console.log(`Friend ${friend}`));

// FOR OF (Best for iterable objects (arrays, sets, maps))
// Focus on the values, not the index
console.info("*For of*")
for (let friend of friends) {
    console.log(friend);
}

// FOR IN (Best for object properties)
console.info("*For in*");
let userTest = {
    name : "Alice",
    age : 25
};
for (let key in userTest){
    console.log(`Key: ${key} is ${userTest[key]}`);
}


// EXEPTIONS HANDLING
console.info("---EXEPTION HANDLING---");
console.info("*Try-catch*");
try{
    let result = test();
    console.log(result);   
} catch (error){
    console.log("Error occurred:", error.message);
} finally {
    console.log("This runs no matter what");
}
