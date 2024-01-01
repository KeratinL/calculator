const equals = document.querySelector(".equal");

const numDisplay = document.querySelector(".numDisplay");

const keypad = document.querySelector("#keypad");

keypad.addEventListener('click', (e) => {
    let keyTarget = e.target;

    switch (keyTarget.className) {
        case 'one':
            numDisplay.innerText += '1';
            break;
        case 'two':
            numDisplay.innerText += '2'
            break;
        case 'three':
            numDisplay.innerText += '3';
            break;
        case 'four':
            numDisplay.innerText += '4'
            break;
        case 'five':
            numDisplay.innerText += '5';
            break;
        case 'six':
            numDisplay.innerText += '6'
            break;
        case 'seven':
            numDisplay.innerText += '7';
            break;
        case 'eight':
            numDisplay.innerText += '8'
            break;
        case 'nine':
            numDisplay.innerText += '9';
            break;
        case 'zero':
            numDisplay.innerText += '0'
            break;
        case 'add':
            numDisplay.innerText += '+';
            break;
        case 'subtract':
            numDisplay.innerText += '-'
            break;
        case 'multiply':
            numDisplay.innerText += '*';
            break;
        case 'divide':
            numDisplay.innerText += '/'
            break;
        case 'decimal':
            numDisplay.innerText += '.';
            break;
    }
})

equals.addEventListener('click', () => {

    let str = numDisplay.innerText;

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

    console.log(calc.calculate(str));

})

