// Get elements
const calcCont = document.getElementById("calcCont");
const display = document.getElementById("display");
const numPad = document.getElementById("numPad");
const opPad = document.getElementById("opPad");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const ac = document.getElementById("ac");
const equal = document.getElementById("equal");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const mult = document.getElementById("multiply");
const div = document.getElementById("divide");
const dMode = document.getElementById("darkMode");
const dModeCont = document.getElementById("dModeCont");

let intOne = "";
let intTwo = "";
let op = "";

function toggleDrkMode() {
    calcCont.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");
    numPad.classList.toggle("dark-mode");
    opPad.classList.toggle("dark-mode");
    dModeCont.classList.toggle("dark-mode");
    dMode.classList.toggle("dark-mode");
}

function update(int) {
    updateDisplay(int);
    updateInts(int);
}

function updateOp(Op) {
    if (op=="") {
        updateDisplay(Op);
        updateOpVar(Op); 
    } else{
        operateNums();
        updateDisplay(Op);
        updateOpVar(Op);  
    }

}

function updateOpVar(Op) {
    op = `${Op}`;
}

function updateDisplay(newText) {

    display.textContent += `${newText}`
}

function updateInts(int) {
    if (op=="") {
        intOne += `${int}`
    } else {
        intTwo += `${int}`
    }

}

function operateNums() {
    let numOne = Number(intOne);
    let numTwo = Number(intTwo);
    if (numOne !== numOne) {
        numOne = 0
        intOne = ""
        updateDisplay(intOne)
    } else {
    switch(op){
        case "+":
            intOne = String(numOne + numTwo);
            display.textContent = "";
            intTwo = "";
            op = "";
            updateDisplay(intOne)
        break;
        case "-":
            intOne = String(numOne - numTwo);
            display.textContent = "";
            intTwo = "";
            op = "";
            updateDisplay(intOne)
        break;
        case "×":
            intOne = String(numOne*numTwo);
            display.textContent = "";
            intTwo = "";
            op = "";
            updateDisplay(intOne)
        break;
        case "÷":
            if (numTwo === 0) {
                display.textContent = "I dunno";
            } else {
                intOne = String(numOne / numTwo);
                   display.textContent = "";
                   intTwo = "";
                   op = "";
                   updateDisplay(intOne)
            }
            
        break;
    }
    }
}

function clearDisplay() {
    intOne = "";
    intTwo = "";
    op = "";
    display.textContent = "";
}
