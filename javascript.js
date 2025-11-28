function operator(a, b, op){
    switch (op){
        case "+": 
            return add(a, b);
            break;

        case "-": 
            return subtract(a, b);
            break;

        case "*": 
            return multiply(a, b);
            break;

        case "/": 
            return divide(a, b);
            break;
        
        default:
            return "ERROR!";
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let a = -3;
let b = -4;
op = "/";
console.log(operator(a, b, op));
