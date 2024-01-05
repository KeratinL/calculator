const equals = document.querySelector(".equal");

const numDisplay = document.querySelector(".numDisplay");

const keypad = document.querySelector("#keypad");

const clear = document.querySelector(".clear");

const backspace = document.querySelector(".backspace")

const add = document.querySelector(".add");

const subtract = document.querySelector(".subtract");

const multiply = document.querySelector(".multiply");

const divide = document.querySelector(".divide");

const input = document.querySelector("input");

input.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(input.value)
    console.log(numDisplay.innerText);
    
})

let disArray = [];

if (numDisplay.innerText == "") {
    add.disabled = true;
    multiply.disabled = true;
    divide.disabled = true;
    equals.disabled = true;
}

//click a button, read inner text, add it to num display.
//check if class is equal to clear, backspace, or equal. Use a switch statement if true
//switch statment will call a function for each.
//Else add text to display. 
//Create evaluation function that will be called on operators and equals and check if dividing by 0
//Create clear and backspace functions 


function evaluation(mathExpression, targetText) {

    // if (!mathExpression.length > 4) {
    //     if (mathExpression.includes("+")) {
    //         mathExpression.splice(mathExpression.indexOf("+"), 0, " ");
    //         mathExpression.splice(mathExpression.indexOf("+") + 1, 0, " ");
    //     }
    //     else if (mathExpression.includes("*")) {
    //         mathExpression.splice(mathExpression.indexOf("*"), 0, " ");
    //         mathExpression.splice(mathExpression.indexOf("*") + 1, 0, " ");
    //     }
    //     else if (mathExpression.includes("/")) {
    //         mathExpression.splice(mathExpression.indexOf("/"), 0, " ");
    //         mathExpression.splice(mathExpression.indexOf("/") + 1, 0, " ");
    //     }
    //     else if (mathExpression.includes("-")) {
    //         mathExpression.splice(mathExpression.indexOf("-"), 0, " ");
    //         mathExpression.splice(mathExpression.indexOf("-") + 1, 0, " ");
    //     }
    // }


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

    function getValue(targetText) {
        if (disArray.length == 4) {
            const tempArray = numDisplay.innerText.split(`${targetText}`);
            disArray.push(tempArray[tempArray.length - 1]);
            numDisplay.innerText += targetText;
            evaluation(disArray, targetText);
        }
        else if (parseFloat((numDisplay.innerText))) {
            disArray.push(parseFloat(numDisplay.innerText), ' ', '-', ' ');
            numDisplay.innerText += targetText;

        }
        else numDisplay.innerText += targetText;



        //Old Way1
        //     if (disArray.length < 4) {
        //         if (!isNaN(+numDisplay.innerText) && numDisplay.innerText != targetText) {
        //             disArray = [numDisplay.innerText, ' ', targetText, ' '];
        //             numDisplay.innerText += targetText;
        //         }
        //         else {
        //             const mathExpression = numDisplay.innerText.split('-');
        //             if (mathExpression.length <= 2) {


        //                 disArray = [mathExpression[0]]
        //             }

        //             else {
        //                 console.log("look here")
        //                 evaluation(mathExpression);
        //             }

        //         }


        //     // else {
        //     //         let tempArray = numDisplay.innerText.split(`${targetText}`);
        //     //         console.log(tempArray);
        //     //         disArray.push(tempArray[tempArray.length - 1]);
        //     //         evaluation(disArray);
        //     //     }

        //      }
    }
    //On empty input disable =, /, + *; 
    //If an - operator is clicked add it to display input and check if it contains an integer. 
    //If it doesn't add operator innerText to numDisplay
    //If it does add the number and operator to an array and add operator to display. 
    // -34 - 34 - split on operators and assign to new array variable
    // add last array variable to global array. 
    //Use evaluate to finish calculation

    keypad.addEventListener('click', (e) => {
        let keyTarget = e.target;
        if (!numDisplay.innerText == "") {
            add.disabled = false;
            multiply.disabled = false;
            divide.disabled = false;
            equals.disabled = false;
        }

        if (keyTarget.innerText == '-') {
            //old way
            //if (!numDisplay.innerText.includes(keyTarget.innerText)) numDisplay.innerText += keyTarget.innerText;
            getValue(keyTarget.innerText);
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
        else {
            numDisplay.innerText += keyTarget.innerText;
        }
    })

// equals.addEventListener('click', () => {
//     const mathExpression = numDisplay.innerText.split('');

//     if (mathExpression.length <= 2) return mathExpression[0];
//     else evaluation(mathExpression);

// });

// add.addEventListener('click', () => {
//     const mathExpression = numDisplay.innerText.split('');

//     if (mathExpression.length <= 2) return mathExpression[0];
//     else evaluation(mathExpression);
// });

// // subtract.addEventListener('click', () => {
// //     const mathExpression = numDisplay.innerText.split('');

// //     if (mathExpression.length <= 2) return mathExpression[0];
// //     else evaluation(mathExpression);
// // });

// divide.addEventListener('click', () => {
//     console.log(numDisplay.innerText);

//     const mathExpression = numDisplay.innerText.split('');

//     if (mathExpression.length <= 2) return "";
//     else evaluation(mathExpression);
// });

// multiply.addEventListener('click', () => {
//     const mathExpression = numDisplay.innerText.split('');

//     if (mathExpression.length <= 2) return "";
//     else evaluation(mathExpression);
// });



// Use parseFloat to receive a number up until a non number. 


