const equals = document.querySelector(".equal");

const numDisplay = document.querySelector(".numDisplay");

const keypad = document.querySelector("#keypad");

const clear = document.querySelector(".clear");

const backspace = document.querySelector(".backspace")

const add = document.querySelector(".add");

const subtract = document.querySelector(".subtract");

const multiply = document.querySelector(".multiply");

const divide = document.querySelector(".divide");

const disArray = [];

//click a button, read inner text, add it to num display. 
keypad.addEventListener('click', (e) => {
    let keyTarget = e.target;

    console.log(keyTarget.innerText);

    numDisplay.innerText += keyTarget.innerText;


})

equals.addEventListener('click', () => {

    const mathExpression = numDisplay.innerText.split('');

    if (mathExpression.includes("+")) {
        mathExpression.splice(mathExpression.indexOf("+"), 0, " ");
        mathExpression.splice(mathExpression.indexOf("+") + 1, 0, " ");
    }
    if (mathExpression.includes("-")) {
        mathExpression.splice(mathExpression.indexOf("-"), 0, " ");
        mathExpression.splice(mathExpression.indexOf("-") + 1, 0, " ");
    }
    if (mathExpression.includes("*")) {
        mathExpression.splice(mathExpression.indexOf("*"), 0, " ");
        mathExpression.splice(mathExpression.indexOf("*") + 1, 0, " ");
    }
    if (mathExpression.includes("/")) {
        mathExpression.splice(mathExpression.indexOf("/"), 0, " ");
        mathExpression.splice(mathExpression.indexOf("/") + 1, 0, " ");
    }
    let str = mathExpression.join("");

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

    numDisplay.innerText = (calc.calculate(str));

})





