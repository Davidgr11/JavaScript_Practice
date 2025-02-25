console.info("VariablesEx02.js (exchange values exercise");
/* 
EXERCISE 1
- Declare 2 let variables
- Exchange values;
*/

let x = 10;
let y = 50;
let aux; //temporary variable

console.log(x,y,aux) //output (10 50 undefined)

aux = x; //10
x = y; //50
y = aux; //10

console.log(x,y) //output (50,10)
