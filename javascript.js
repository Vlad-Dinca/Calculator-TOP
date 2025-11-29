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
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function clickAction(action) {

}

const result = document.querySelector("#resultButton");
const reset = document.querySelector("#resetButton");
const zero = document.querySelector("#zeroButton");
const one = document.querySelector("#oneButton");
const two = document.querySelector("#twoButton");
const three = document.querySelector("#threeButton");
const four = document.querySelector("#fourButton");
const five = document.querySelector("#fiveButton");
const six = document.querySelector("#sixButton");
const seven = document.querySelector("#sevenButton");
const eight = document.querySelector("#eightButton");
const nine = document.querySelector("#nineButton");
const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");
const display = document.querySelector("#display");
display.innerText = "";
let displayString = "";
let firstNumber = 0;
let secondNumber = 0;
let op = "";
let pressed = false; 


zero.addEventListener(("click"), function (event) {
  if (display.innerText[0] != 0 && display.innerText.length < 9) { // first digit can't be 0, unless we add, multiply, subtract or divide
                                                                   // maximum size of a number can pe 9 digits
    display.innerText = "0";
    displayString += display.innerText;
    display.innerText = displayString;
  } 
});

one.addEventListener(("click"), function (event) {
  if (display.innerText[0] != 0 && display.innerText.length < 9) {
    display.innerText = "1";
    displayString += display.innerText;
    display.innerText = displayString;
  }
});

two.addEventListener(("click"), function (event) {
  if (display.innerText[0] != 0 && display.innerText.length < 9) {
    display.innerText = "2";
    displayString += display.innerText;
    display.innerText = displayString;
  }
});

three.addEventListener(("click"), function (event) {
  if (display.innerText[0] != 0 && display.innerText.length < 9) {
    display.innerText = "3";
    displayString += display.innerText;
    display.innerText = displayString;
  }
});

four.addEventListener(("click"), function (event) {
  if (display.innerText[0] != 0 && display.innerText.length < 9) {
    display.innerText = "4";
    displayString += display.innerText;
    display.innerText = displayString;
  }
});

five.addEventListener(("click"), function (event) {
  if (display.innerText[0] != 0 && display.innerText.length < 9) {
    display.innerText = "5";
    displayString += display.innerText;
    display.innerText = displayString;
  }
});

six.addEventListener(("click"), function (event) {
  if (display.innerText[0] != 0 && display.innerText.length < 9) {
    display.innerText = "6";
    displayString += display.innerText;
    display.innerText = displayString;
  }
});

seven.addEventListener(("click"), function (event) {
  if (display.innerText[0] != 0 && display.innerText.length < 9) {
    display.innerText = "7";
    displayString += display.innerText;
    display.innerText = displayString;
  }
});

eight.addEventListener(("click"), function (event) {
  if (display.innerText[0] != 0 && display.innerText.length < 9) {
    display.innerText = "8";
    displayString += display.innerText;
    display.innerText = displayString;
  }
});

nine.addEventListener(("click"), function (event) {
  if (display.innerText[0] != 0 && display.innerText.length < 9) {
    display.innerText = "9";
    displayString += display.innerText;
    display.innerText = displayString;
  }
});


addButton.addEventListener(("click"), function (event) {
  if (pressed === false && display.innerText !=""){
    firstNumber = parseFloat(display.innerText);
    display.innerText = "";
    displayString = "";
    op = "+"
    pressed = true; // once you press one of the operator buttons, you are locked out of the other operator buttons
  }
});

subtractButton.addEventListener(("click"), function (event) {
  if (pressed === false && display.innerText !="") {
    firstNumber = parseFloat(display.innerText);
    display.innerText = "";
    displayString = "";
    op = "-"
    pressed = true;
  }
});

multiplyButton.addEventListener(("click"), function (event) {
  if (pressed === false && display.innerText !="") {
    firstNumber = parseFloat(display.innerText);
    display.innerText = "";
    displayString = "";
    op = "*"
    pressed = true;
  }
});

divideButton.addEventListener(("click"), function (event) {
  if (pressed === false  && display.innerText !="") {
    firstNumber = parseFloat(display.innerText);
    display.innerText = "";
    displayString = "";
    op = "/"
    pressed = true;
  }
});



result.addEventListener(("click"), function (event) {
  secondNumber = parseFloat(display.innerText);
  display.innerText = (operator(firstNumber, secondNumber, op)).toFixed(2).substr(0, 14); // show a maximum of 14 digits on the display.
  pressed = false;
});

reset.addEventListener(("click"), function (event) {
  display.innerText = "";
  firstNumber = 0;
  secondNumber = 0;
  displayString = "";
  pressed = false;
})








