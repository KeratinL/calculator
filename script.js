const equals = document.querySelector(".equal");

const numDisplay = document.querySelector(".numDisplay");

const keypad = document.querySelector("#keypad");

const clear = document.querySelector(".clear");

const backspace = document.querySelector(".backspace")

const add = document.querySelector(".add");

const subtract = document.querySelector(".subtract");

const multiply = document.querySelector(".multiply");

const divide = document.querySelector(".divide");

const decimal = document.querySelector(".decimal");

let counter = 0;

let lastUsed = '';

let disArray = [];

let numString = '1,2,3,4,5,6,7,8,9,0';
let opString = '+, -, /, *'

let opCounter = 0;

let keyTarget = '';

if (numDisplay.innerText == "") {
    add.disabled = true;
    multiply.disabled = true;
    divide.disabled = true;
    equals.disabled = true;
}

function evaluation(expressionArray, lastUsed) {

    function Calculator() {
        this.methods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
        }

        this.calculate = (expressionArray) => {
            [a, op, b] = expressionArray;

            return this.methods[op](+a, +b);
        }
    }

    const calc = new Calculator();

    numDisplay.innerText = "";

    let text = parseFloat(calc.calculate(expressionArray).toFixed(4));

    if (text == Infinity || text == -Infinity) {
        numDisplay.innerText = 'cheeky';
        disArray = [];
    }
    else {
        numDisplay.innerText = text + lastUsed;
        disArray = [];
        if (lastUsed == '') return '';
        else firstSplit(lastUsed);

    }

}

function firstSplit(operator) {
    lastUsed = operator;
    let tempArray = numDisplay.innerText.split(operator);
    disArray = [tempArray[0], operator];
}


function addToDisplay(keyTarget){

    if ((numDisplay.innerText == '0' || numDisplay.innerText == '-0') && numString.includes(keyTarget, ".")) numDisplay.innerText = "0";
    else {

        if (numString.includes(keyTarget)) {
            opCounter = 0;
            numDisplay.innerText += keyTarget;
        }
        if (keyTarget == ".") {
            numDisplay.innerText += keyTarget
            opCounter = 0;
        };
        if (numDisplay.innerText != ".") {
            add.disabled = false;
            multiply.disabled = false;
            divide.disabled = false;
            equals.disabled = false;
        }



        if (keyTarget == '-' && numDisplay.innerText == '') {
            numDisplay.innerText += '-';
        }
        //Check here: How do I exchange operators?
        //How do I make sure extra operators are not added to the display?
        //How do I make sure the counter is added to the second time? Subtract when moving on to a non operator input.
        else if (opString.includes(keyTarget)) {
            if (opCounter < 1) {
                opCounter++;
                counter++;
                if (counter < 2) numDisplay.innerText += keyTarget;
            }
            else if (counter < 2 && opCounter == 1) {
                numDisplay.innerText = numDisplay.innerText.slice(0, numDisplay.innerText.length - 1) + keyTarget;

            }

        }


        else if (keyTarget == 'C') {
            numDisplay.innerText = '';
            if (numDisplay.innerText == "") {
                add.disabled = true;
                multiply.disabled = true;
                divide.disabled = true;
                equals.disabled = true;
            }
            counter = 0;
            disArray = [];
        }
        else if (keyTarget.className == 'backspace') {
            numDisplay.innerText = numDisplay.innerText.slice(0, numDisplay.innerText.length - 1);
        }

        if (counter == 1 && (keyTarget == '-' ||
            keyTarget == '+' ||
            keyTarget == '/' ||
            keyTarget == '*')) {
            firstSplit(keyTarget);
        }

        if (counter == 1 && keyTarget == '=') {
            counter = 0;
            let tempArray = numDisplay.innerText.split(`${lastUsed}`);
            lastUsed = '';
            disArray.push(tempArray[tempArray.length - 1]);
            if (evaluation(disArray, lastUsed) == '') {

            };
        }

        else if (counter == 2 &&
            (keyTarget == '-' ||
                keyTarget == '+' ||
                keyTarget == '/' ||
                keyTarget == '*')) {
            counter = 0;
            let tempArray = numDisplay.innerText.split(`${lastUsed}`);
            disArray.push(tempArray[tempArray.length - 1]);
            lastUsed = keyTarget;
            counter = 1;
            evaluation(disArray, lastUsed);
        }

    }
}

window.addEventListener('keydown', (e) => {
    keyTarget = e.key;
    if(keyTarget == 'Enter') keyTarget = '=';
    addToDisplay(keyTarget);

})

keypad.addEventListener('click', (e) => {

    keyTarget = e.target.innerText;
    addToDisplay(keyTarget);

})

//How do you exchange operators
//How do make sure that if the final result is equal to zero you cannot add a number to the display after 0