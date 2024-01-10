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
//If there isnt an operator check if there is a decimal, if there isn't, add one. 
//else check if there is more than 2 decimals, if not add one.

function addToDisplay(keyTarget) {
    const decimalObj = numDisplay.innerText.split("").reduce((obj, char) => {
        if (obj[char] == undefined) obj[char] = 0;

        obj[char]++;

        return obj;

    }, {})

    if ((numDisplay.innerText == '0' || numDisplay.innerText == '-0') && numString.includes(keyTarget, ".")) numDisplay.innerText = "0";
    else {

        if (numString.includes(keyTarget)) {
            opCounter = 0;
            numDisplay.innerText += keyTarget;
        }
        if (keyTarget == ".") {
            const arrayTrue = numDisplay.innerText.split("").map(char => opString.includes(char));
            if (!numDisplay.innerText.includes(`${opString}`) && decimalObj['.'] == undefined) numDisplay.innerText += keyTarget;
            if (arrayTrue.includes(true) && decimalObj['.'] == 1) numDisplay.innerText += keyTarget
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
        else if (keyTarget.className == 'backspace' || keyTarget == 'Backspace') {
            if (!opString.includes(`${numDisplay.innerText.split("")[numDisplay.innerText.length - 1]}`)) {
                numDisplay.innerText = numDisplay.innerText.slice(0, numDisplay.innerText.length - 1);
            }

        }

        if (counter == 1 && (keyTarget == '-' ||
            keyTarget == '+' ||
            keyTarget == '/' ||
            keyTarget == '*')) {
            firstSplit(keyTarget);
        }

        if (counter == 1 && keyTarget == '=') {
            if (!opString.includes(`${numDisplay.innerText.split("")[numDisplay.innerText.length - 1]}`)) {
                counter = 0;
                let tempArray = numDisplay.innerText.split(`${lastUsed}`);
                lastUsed = '';
                disArray.push(tempArray[tempArray.length - 1]);
                if (evaluation(disArray, lastUsed) == '') {

                };
            }
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
    const arrTest1 = numDisplay.innerText.split("");
    const arrTestOp = opString.split(",");
    const arrBool = arrTest1.map(char => arrTestOp.includes(char))
    if (numDisplay.innerText.length == 6 && arrBool.filter(bool => bool).join("")) addToDisplay(keyTarget);
    if (numDisplay.innerText.length > 6 && numDisplay.innerText.length < 9) {
        if (keyTarget == 'Enter') keyTarget = '=';
        addToDisplay(keyTarget);
    }
    else if (opString.includes(keyTarget)) {
        addToDisplay(keyTarget);
    }
    if (keyTarget == 'Escape') {
        keyTarget = 'C';
        addToDisplay(keyTarget);
    }
    if (numDisplay.innerText.length < 6) {
        if (keyTarget == 'Enter') keyTarget = '=';
        addToDisplay(keyTarget);

    }
    else {
        if (!numString.includes(keyTarget) && keyTarget != '.') addToDisplay(keyTarget);
    }
    if (keyTarget == 'Enter') {
        keyTarget = '=';
        addToDisplay(keyTarget);
    }

})

keypad.addEventListener('click', (e) => {
    keyTarget = e.target.innerText;
    const arrTest1 = numDisplay.innerText.split("");
    const arrTestOp = opString.split(",");
    const arrBool = arrTest1.map(char => arrTestOp.includes(char))
    if (numDisplay.innerText.length == 6 && arrBool.filter(bool => bool).join("")) addToDisplay(keyTarget);
    if (numDisplay.innerText.length > 6 && numDisplay.innerText.length < 9) {
        if (keyTarget == 'Enter') keyTarget = '=';
        addToDisplay(keyTarget);
    }
    else if (opString.includes(keyTarget)) {
        addToDisplay(keyTarget);
    }

    if (keyTarget == 'C') {
        addToDisplay(keyTarget);
    }
    if (numDisplay.innerText.length < 6) {
        if (keyTarget == 'Enter') keyTarget = '=';
        addToDisplay(keyTarget);

    }
    else {
        if (!numString.includes(keyTarget) && keyTarget != '.') addToDisplay(keyTarget);
    }
    if (e.target.className == 'backspace') {
        keyTarget = e.target;
        addToDisplay(keyTarget);
    }
})

//Fix Backspace on click