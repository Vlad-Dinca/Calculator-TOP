function operator(a, b, op) {
  switch (op) {
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

function add(a, b) {
  console.log(a+b);
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  console.log(typeof(a) + typeof(b));
  console.log(a + b);
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function clickAction(action){

}

const result = document.querySelector("#resultButton");
const reset = document.querySelector("#resetButton") ;
const zero = document.querySelector("#zeroButton") ;
const one = document.querySelector("#oneButton") ;
const two = document.querySelector("#twoButton") ;
const three = document.querySelector("#threeButton") ;
const four = document.querySelector("#fourButton") ;
const five = document.querySelector("#fiveButton") ;
const six = document.querySelector("#sixButton") ;
const seven = document.querySelector("#sevenButton") ;
const eight = document.querySelector("#eightButton") ;
const nine = document.querySelector("#nineButton") ;
const addButton = document.querySelector("#addButton") ;
const subtractButton = document.querySelector("#subtractButton") ;
const multiplyButton = document.querySelector("#multiplyButton") ;
const divideButton = document.querySelector("#divideButton") ;
const display = document.querySelector("#display");
display.innerText = "0";
let displayString ="";
let firstNumber ="";
let secondNumber ="";
let op = "";

if (displayString.length <= 9){
  zero.addEventListener(("click"), function(event){ 
    display.innerText="0"; 
    displayString += display.innerText;
    display.innerText = displayString;
  });

  one.addEventListener(("click"), function(event){ 
    display.innerText="1"; 
    displayString += display.innerText;
    display.innerText = displayString;
  });

  two.addEventListener(("click"), function(event){ 
    display.innerText="2"; 
    displayString += display.innerText;
    display.innerText = displayString;
  });

  three.addEventListener(("click"), function(event){ 
    display.innerText="3"; 
    displayString += display.innerText;
    display.innerText = displayString;
  });

  four.addEventListener(("click"), function(event){ 
    display.innerText="4"; 
    displayString += display.innerText;
    display.innerText = displayString;
  });

  five.addEventListener(("click"), function(event){ 
    display.innerText="5"; 
    displayString += display.innerText;
    display.innerText = displayString;
  });

  six.addEventListener(("click"), function(event){ 
    display.innerText="6"; 
    displayString += display.innerText;
    display.innerText = displayString;
  });

  seven.addEventListener(("click"), function(event){ 
    display.innerText="7"; 
    displayString += display.innerText;
    display.innerText = displayString;
  });

  eight.addEventListener(("click"), function(event){ 
    display.innerText="8"; 
    displayString += display.innerText;
    display.innerText = displayString;
  });

  nine.addEventListener(("click"), function(event){ 
    display.innerText="9"; 
    displayString += display.innerText;
    display.innerText = displayString;
  });
};

addButton.addEventListener(("click"), function(event){
  firstNumber = parseFloat(display.innerText).toFixed(2);
  display.innerText="";
  displayString="";
  op = "+"
});

subtractButton.addEventListener(("click"), function(event){
  firstNumber = parseFloat(display.innerText).toFixed(2);
  display.innerText="";
  displayString="";
  op = "-"
});

multiplyButton.addEventListener(("click"), function(event){
  firstNumber = parseFloat(display.innerText).toFixed(2);
  display.innerText="";
  displayString="";
  op = "*"
});

divideButton.addEventListener(("click"), function(event){
  firstNumber = parseFloat(display.innerText).toFixed(2);
  display.innerText="";
  displayString="";
  op = "/"
})


result.addEventListener(("click"), function(event){
  secondNumber = parseFloat(display.innerText).toFixed(2);
  display.innerText=(operator(firstNumber, secondNumber, op)).toString(); 
});

reset.addEventListener(("click"), function(event){
  display.innerText="0";
  firstNumber = 0;
  secondNumber = 0;
  displayString = "";
})








