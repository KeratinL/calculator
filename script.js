/*
const btnEnter = document.querySelector("#enter");
const input = document.querySelector("input");

btnEnter.addEventListener('click', () => {

    let str = input.value;

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

*/