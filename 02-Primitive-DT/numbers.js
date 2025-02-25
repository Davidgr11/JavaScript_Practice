console.info("----------numbers.js (explanation)");

let price = 20, tax = price*0.16;
let totalPrice = price + tax;
// others (+, -, *, /, %)
console.log(`Price with taxes is $${totalPrice}`);

// Round or Precision
let num = 45.6739;
console.log(num.toFixed(1));
console.log(num.toPrecision(6));

// Math Methods
console.log(Math.round(Math.PI));
console.log(Math.floor(4.9));//round down
console.log(Math.ceil(4.9));//round up
console.log(Math.random()*100);// 0 to 1
console.log(Math.pow(2,3));
console.log(Math.sqrt(144));
console.log(Math.abs(-30));

// Increments
let points = 0;
points ++; //1
points +=3; //4
points -=2; //2
console.log(points);

// Conversions and Common Methods
console.log(Number("123"));
console.log(parseInt("50px"));
console.log(parseFloat("3.14pivalue"));
console.log(typeof(points));
console.log(Number.isInteger(points));

// Operators
if (10 > 0){
    console.log("Yes");
}
if("12" === 12){
    console.log("Yes");
}else{console.log("No");}
//others (< || === strict || == || != || !== strict)
