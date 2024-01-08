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

if (numDisplay.innerText == "") {
    add.disabled = true;
    multiply.disabled = true;
    divide.disabled = true;
    equals.disabled = true;
}
function evaluation(expressionArray) {
    let str = '';

    function Calculator() {
        this.methods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
        }

        this.calculate = (str) => {
            [a, op, b] = str.split(" ");

            return this.methods[op](+a, +b);
        }
    }

    const calc = new Calculator();

    numDisplay.innerText = "";

    let text = parseFloat(calc.calculate(str).toFixed(4));

    if (text == Infinity || text == -Infinity) {
        numDisplay.innerText = 'cheeky';
        disArray = [];
    }
    else {
        numDisplay.innerText = text + targetText;
        disArray = [];
    }

}


// function getValue(targetText) {
//     if (disArray.length == 4) {
//         const tempArray = numDisplay.innerText.split(`${targetText}`);
//         disArray.push(tempArray[tempArray.length - 1]);
//         numDisplay.innerText += targetText;
//         evaluation(disArray, targetText);
//     }
//     else if (parseFloat((numDisplay.innerText))) {
//         disArray.push(parseFloat(numDisplay.innerText), ' ', '-', ' ');
//         numDisplay.innerText += targetText;

//     }
//     else numDisplay.innerText += targetText;

// }

keypad.addEventListener('click', (e) => {
    let keyTarget = e.target;
    if (keyTarget.innerText == ".") numDisplay.innerText += keyTarget.innerText;
    if (numDisplay.innerText != ".") {
        add.disabled = false;
        multiply.disabled = false;
        divide.disabled = false;
        equals.disabled = false;
    }

    if(numString.includes(keyTarget.innerText)){
        numDisplay.innerText += keyTarget.innerText;
    }

    if (keyTarget.innerText == '-' && numDisplay.innerText == '') {
        numDisplay.innerText += '-';
    }

    else if (keyTarget.innerText == '-' ||
        keyTarget.innerText == '+' ||
        keyTarget.innerText == '/' ||
        keyTarget.innerText == '*') {
        counter++;
        numDisplay.innerText += keyTarget.innerText;
    }
    else if (keyTarget.innerText == 'C') {
        numDisplay.innerText = '';
        if (numDisplay.innerText == "") {
            add.disabled = true;
            multiply.disabled = true;
            divide.disabled = true;
            equals.disabled = true;
        }
        disArray = [];
    }
    else if (keyTarget.className == 'backspace') {
        numDisplay.innerText = numDisplay.innerText.slice(0, numDisplay.innerText.length - 1);
    }
    if (counter == 1 && (keyTarget.innerText == '-' ||
        keyTarget.innerText == '+' ||
        keyTarget.innerText == '/' ||
        keyTarget.innerText == '*')) {
        lastUsed = keyTarget.innerText;
        let tempArray = numDisplay.innerText.split(keyTarget.innerText);
        disArray = [tempArray[0], ' ', keyTarget.innerText, " "];
    }
//check here
    if (counter == 2 && keyTarget.innerText == '=') {
        lastUsed = keyTarget.innerText;
        counter = 0;
        let tempArray = numDisplay.innerText.split(`${lastUsed}`);
        disArray.push(tempArray[tempArray.length - 2]);
        evaluation();
    }

    else if (counter == 2 &&
        (keyTarget.innerText == '-' ||
        keyTarget.innerText == '+' ||
        keyTarget.innerText == '/' ||
        keyTarget.innerText == '*')) {
        counter = 0;
        let tempArray = numDisplay.innerText.split(`${lastUsed}`);
        disArray.push(tempArray[tempArray.length - 2]);
        lastUsed = keyTarget.innerText;
        counter = 1;
        evaluation(disArray);
    }

})




// Use parseFloat to receive a number up until a non number. 


//Have input go through processing after the second operator(every operator beside -)
//And the second or third operator for -, based on if the input starts with -. 

//-55+44+
//-55-44-
//-55-44+
//55+55-

//There can be, max, only three - and two of the other operators. 
//Have input go through processing after the second operator(every operator beside -)
//Counter for every time an operator is used, subtract one if the begginning operator is -?
//Figure out how to use a regex for non numeric values. (anki)
//Have a value that holds the last used operator. 
//If an operator was used and it wasn't the beginning of the string, assign it to this variable.
//split on last inputed operator. What about equal sign 
//if it value starts with -, split on operator, but add the negative in from

//Don't allow +, *, / or = to be used if the display is empty
//if an operator is used check if it is the only character in the input. If so, do not add it
//to the operator counter do not store operator in lastUsed variable.
//if not, add 1 to operator count.
//if operator count is equal to 1 and an operator was used, add the operator to the lastUsed variable
//If operator count is equal to two and equal operator was used change operator count to 0.
// Split display by lastUsed variable.
//If operator count is equal to two and another operator is used, change operator count to 1,
//split display based on lastUsed variable and assign operator to lastUsed.  