/*
Create a weather advisory system.
If temperature > 30°C, log "It's too hot!"
If temperature < 10°C, log "It's too cold!"
Otherwise, log "The weather is pleasant."
*/
console.info("Exercise 1: Conditional Statement");
console.log("Wether Advisory System");
let temp = 0;
if (temp > 30){
    console.log("It's too hot!");
} else if (temp < 10){
    console.log("It's too cold!")
} else {
    console.log("The weather is pleasant!");
}


/*
Write a tax calculator:
Income ≤ $10,000 → 0% tax
$10,001 - $50,000 → 10% tax
$50,001 - $100,000 → 20% tax
Above $100,000 → 30% tax
Return the final tax amount.
*/
console.info("Exercise 2: Complex Conditional Statement");
console.log("Tax Calculator");
let income = 120000;
let tax;
switch(true){
    case (income <= 10000):
        tax =0;
        break;
    case (income > 10000 && income <= 50000):
        tax =0.1;
        break;
    case (income > 50000 && income <=100000):
        tax =0.2;
        break;
    default : tax =0.3;
}
let taxAmount = income * tax;
console.log(`Income: ${income} Tax rate: ${tax} Tax to pay: ${taxAmount}`);


/*
Print all even numbers from 1 to 100 using both:
for loop
while loop
*/
console.info("Exercise 3: Simple Loop");
console.log("for loop");
for (let i = 1; i<=100 ; i++){
    if(i%2 === 0){
        console.log(i);
    }
}
console.log("while loop");
let i = 2;
while(i<=100){
    console.log(i);
    i+=2;
}

/*
FizzBuzz Challenge (With a twist!):
Print numbers 1 to 50.
If divisible by 3 → Print "Fizz".
If divisible by 5 → Print "Buzz".
If divisible by both → Print "FizzBuzz".
But skip numbers that are divisible by 7.
*/
console.info("Exercise 4: Complex Loop");
for(let i = 1 ; i<=50 ; i++){
    if(i%7 === 0){
        continue;
    }
    if( i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz");
    }else if (i%3 === 0){
        console.log("Fizz");
    }else if(i%5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

/*
Given an array of students' scores [85, 42, 77, 45, 33, 88]:
Print "Pass" if score is ≥ 50, "Fail" otherwise.
Use .forEach().
*/
console.info("Exercise 5: Advanced Looping 1");
console.log("Sudents Exam Decision");
let studentsScore = [85,42,77,45,43,88];
studentsScore.forEach(score => score >=50 ? console.log("Pass"): console.log("Fail"));
studentsScore.forEach(score => {
    console.log(`${score} → ${score >= 50 ? "Pass ✅" : "Fail ❌"}`);
});


/*
Given an array of numbers [3, 7, 10, 15, 20]:
Use .map() to double each number.
Use .filter() to keep numbers ≥ 15.
Use .reduce() to find the total sum of remaining numbers.
*/
console.info("Exercise 6: Advanced Looping 2");
let numbers = [3,7,10,15,20];
modifiedNumbers  = numbers.map(num => num*2).filter(num => num >= 15).reduce((acc,num) => acc + num, 0);
console.log(`Total Sum: ${modifiedNumbers}`);



/*
Write a function that:
Takes two numbers.
Divides them.
Handles division by zero using try-catch.
*/
console.info("Exercise 7: Exeption Handling");
const divideNumbers = (a,b) => {
    try{
        if (b ===0){
            throw new Error("Cannot divide by zero");
        }
        return a/b;
    } catch (error){
        console.log(`Error: ${error.message}`);
        return null;
    }
}

console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));


/*
Write a JSON validator:
Try to JSON.parse() a string.
If invalid, catch the error and log "Invalid JSON format".
*/
console.info("Exercise 8: Exeption Handling Json");

function validateJSON(jsonString) {
    try {
        let parsedData = JSON.parse(jsonString);
        console.log("Valid JSON:", parsedData);
    } catch (error) {
        console.log("Invalid JSON format ❌");
        console.log(error.message);
    }
}
validateJSON('{"name": "Alice", "age": 25}');
validateJSON('{"name": "Alice", age: 25}'); 