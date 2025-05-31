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

function toggleDrkMode() {
    calcCont.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");
    numPad.classList.toggle("dark-mode");
    opPad.classList.toggle("dark-mode");
    dModeCont.classList.toggle("dark-mode");
    dMode.classList.toggle("dark-mode");
}
