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

    // switch (keyTarget.className) {
    //     case 'one':
    //         numDisplay.innerText += '1';
    //         disArray.push(1);
    //         break;
    //     case 'two':
    //         numDisplay.innerText += '2';
    //         disArray.push(2);
    //         break;
    //     case 'three':
    //         numDisplay.innerText += '3';
    //         disArray.push(3);
    //         break;
    //     case 'four':
    //         numDisplay.innerText += '4';
    //         disArray.push(4);
    //         break;
    //     case 'five':
    //         numDisplay.innerText += '5';
    //         disArray.push(5);
    //         break;
    //     case 'six':
    //         numDisplay.innerText += '6';
    //         disArray.push(6);
    //         break;
    //     case 'seven':
    //         numDisplay.innerText += '7';
    //         disArray.push(7);
    //         break;
    //     case 'eight':
    //         numDisplay.innerText += '8';
    //         disArray.push(8);
    //         break;
    //     case 'nine':
    //         numDisplay.innerText += '9';
    //         disArray.push(9);
    //         break;
    //     case 'zero':
    //         numDisplay.innerText += '0'
    //         disArray.push(0);
    //         break;
    //     case 'add':
    //         numDisplay.innerText += '+'
    //         disArray.push(" ", "+", " ");
    //         break;
    //     case 'subtract':
    //         numDisplay.innerText += '-';
    //         disArray.push(" ", "-", " ");
    //         break;
    //     case 'multiply':
    //         numDisplay.innerText += '*';
    //         disArray.push(" ", "*", " ");
    //         break;
    //     case 'divide':
    //         numDisplay.innerText += '/'
    //         disArray.push(" ", "/", " ");
    //         break;
    //     case 'decimal':
    //         numDisplay.innerText += '.';
    //         disArray.push(".");
    //         break;
    //     case 'clear':
    //         numDisplay.innerText = '';
    //     case 'backspace':
    //         numDisplay.innerText = numDisplay.innerText.slice(0, numDisplay.innerText.length - 1);
//     }
//     console.log(disArray.join(""));
//     console.log(disArray.split(" "));
})

 

// keypad.addEventListener('click', () => {
//     if (numDisplay.innerHTML.split("").includes("+")) {

//         const mathExpression = numDisplay.innerText.split('');

//         if (mathExpression.includes("+")) {
//             mathExpression.splice(mathExpression.indexOf("+"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("+") + 1, 0, " ");
//         }
//         if (mathExpression.includes("-")) {
//             mathExpression.splice(mathExpression.indexOf("-"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("-") + 1, 0, " ");
//         }
//         if (mathExpression.includes("*")) {
//             mathExpression.splice(mathExpression.indexOf("*"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("*") + 1, 0, " ");
//         }
//         if (mathExpression.includes("/")) {
//             mathExpression.splice(mathExpression.indexOf("/"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("/") + 1, 0, " ");
//         }

//         let str = mathExpression.join("");

//         [a, op, b] = str.split(" ");

//         numDisplay.innerText = "";
        
//         const calc = {
//             "+": (a, b) => a + b,
//             "-": (a, b) => a - b,
//             "*": (a, b) => a * b,
//             "/": (a, b) => a / b,
//         }

//         numDisplay.innerText = calc[op](+a, +b);

//     }
// })

// subtract.addEventListener('click', () => {
//     if (numDisplay.innerHTML.split("").includes("-")) {

//         const mathExpression = numDisplay.innerText.split('');

//         if (mathExpression.includes("+")) {
//             mathExpression.splice(mathExpression.indexOf("+"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("+") + 1, 0, " ");
//         }
//         if (mathExpression.includes("-")) {
//             mathExpression.splice(mathExpression.indexOf("-"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("-") + 1, 0, " ");
//         }
//         if (mathExpression.includes("*")) {
//             mathExpression.splice(mathExpression.indexOf("*"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("*") + 1, 0, " ");
//         }
//         if (mathExpression.includes("/")) {
//             mathExpression.splice(mathExpression.indexOf("/"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("/") + 1, 0, " ");
//         }

//         let str = mathExpression.join("");

//         [a, op, b] = str.split(" ");

//         numDisplay.innerText = "";
        
//         const calc = {
//             "+": (a, b) => a + b,
//             "-": (a, b) => a - b,
//             "*": (a, b) => a * b,
//             "/": (a, b) => a / b,
//         }

//         numDisplay.innerText = calc[op](+a, +b);

//     }
// })

// multiply.addEventListener('click', () => {
//     if (numDisplay.innerHTML.split("").includes("*")) {

//         const mathExpression = numDisplay.innerText.split('');

//         if (mathExpression.includes("+")) {
//             mathExpression.splice(mathExpression.indexOf("+"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("+") + 1, 0, " ");
//         }
//         if (mathExpression.includes("-")) {
//             mathExpression.splice(mathExpression.indexOf("-"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("-") + 1, 0, " ");
//         }
//         if (mathExpression.includes("*")) {
//             mathExpression.splice(mathExpression.indexOf("*"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("*") + 1, 0, " ");
//         }
//         if (mathExpression.includes("/")) {
//             mathExpression.splice(mathExpression.indexOf("/"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("/") + 1, 0, " ");
//         }

//         let str = mathExpression.join("");

//         [a, op, b] = str.split(" ");

//         numDisplay.innerText = "";
        
//         const calc = {
//             "+": (a, b) => a + b,
//             "-": (a, b) => a - b,
//             "*": (a, b) => a * b,
//             "/": (a, b) => a / b,
//         }

//         numDisplay.innerText = calc[op](+a, +b);

//     }
// })

// divide.addEventListener('click', () => {
//     if (numDisplay.innerHTML.split("").includes("/")) {

//         const mathExpression = numDisplay.innerText.split('');

//         if (mathExpression.includes("+")) {
//             mathExpression.splice(mathExpression.indexOf("+"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("+") + 1, 0, " ");
//         }
//         if (mathExpression.includes("-")) {
//             mathExpression.splice(mathExpression.indexOf("-"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("-") + 1, 0, " ");
//         }
//         if (mathExpression.includes("*")) {
//             mathExpression.splice(mathExpression.indexOf("*"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("*") + 1, 0, " ");
//         }
//         if (mathExpression.includes("/")) {
//             mathExpression.splice(mathExpression.indexOf("/"), 0, " ");
//             mathExpression.splice(mathExpression.indexOf("/") + 1, 0, " ");
//         }

//         let str = mathExpression.join("");

//         [a, op, b] = str.split(" ");

//         numDisplay.innerText = "";
        
//         const calc = {
//             "+": (a, b) => a + b,
//             "-": (a, b) => a - b,
//             "*": (a, b) => a * b,
//             "/": (a, b) => a / b,
//         }

//         numDisplay.innerText = calc[op](+a, +b);

//     }
// })


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





