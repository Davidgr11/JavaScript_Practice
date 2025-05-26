console.info("VariablesEx01.js (fucntion&blocked scoped difference)");

// Function scoped "VAR"
exampleFunction();
function exampleFunction() {
    var x = 10;
    if (true) {
        var y = 20;
    }
    console.log(y); // Works
}

console.log(x); // Error! x is not accessible outside the function


// Block scoped "LET" & "CONST"
exampleBlock();
function exampleBlock() {
    let a = 5;
    if (true) {
        let b = 10; 
        console.log(b); // Works
    }
    console.log(a); // Works
    console.log(b); // Error! b is not accesible outside the block {}
}
