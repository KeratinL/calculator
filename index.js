function add(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }

    return sum;
}

//console.log(add(1, 2, 3));

function subtract(...args) {
    let difference = args[0];
    args.splice(0, 1);
    for (let arg of args) {
        difference -= arg;
    }

    return difference;
}

//console.log(subtract(55, 20, 23));

function multiply(...args) {
    let product = 1;
    for (let arg of args) {
        product *= arg;
    }

    return product;
}

console.log(multiply(12, 32, 321))

function divide(...args) {
    let quotient = args[0];
    args.splice(0, 1);
    for (let arg of args) {
        quotient /= arg;
    }

    return quotient;
}

//console.log(divide(100, 2, 5));