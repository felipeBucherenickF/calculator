const add = (summand1, summand2) => {
  return summand1 + summand2;
};

const substract = (minuend, subtrahend) => {
  return minuend - subtrahend;
};

const multiply = (multiplicand, multiplier) => {
  return multiplicand * multiplier;
};
const divide = (dividend, divisor) => {
  return dividend / divisor;
};

const operate = (firstNumber, secondNumber, operator) => {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  let result = 0;
  if (operator === "+") {
    result = add(firstNumber, secondNumber);
    console.log("sumando");
  }
  if (operator === "-") {
    result = substract(firstNumber, secondNumber);
    console.log("restando");
  }
  if (operator === "*") {
    result = multiply(firstNumber, secondNumber);
    console.log("multiplicando");
  }
  if (operator === "/") {
    result = divide(firstNumber, secondNumber);
    console.log("dividiendo");
  }
  console.log(firstNumber);
  return result;
};

let firstNumber = "";
let secondNumber = "";
let operator = "";

const reset = () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
};

const display = document.querySelector(".display");

/* == OPERATIONS ========================================================*/
const divideButton = document.querySelector("#divide-button");
divideButton.addEventListener("click", () => {
  operator = "/";
});
const multiplyButton = document.querySelector("#multiply-button");
multiplyButton.addEventListener("click", () => {
  operator = "*";
});
const substractButton = document.querySelector("#substract-button");
substractButton.addEventListener("click", () => {
  operator = "-";
});
const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", () => {
  operator = "+";
});
const equalButton = document.querySelector("#equal-button");
equalButton.addEventListener("click", () => {
  const result = operate(firstNumber, secondNumber, operator);
  display.value = result;
  console.log(result);
  reset();
});

/* == NUMBERS ============================================================ */

const ceroButton = document.querySelector("#cero-button");
ceroButton.addEventListener("click", (event) => {
  if (!firstNumber || !operator) {
    firstNumber = firstNumber + event.target.value;
    display.value = firstNumber;
  } else {
    secondNumber += event.target.value;
    display.value = secondNumber;
  }
});

const oneButton = document.querySelector("#one-button");
oneButton.addEventListener("click", (event) => {
  if (!firstNumber || !operator) {
    firstNumber = firstNumber + event.target.value;
    display.value = firstNumber;
  } else {
    secondNumber += event.target.value;
    display.value = secondNumber;
  }
});
const twoButton = document.querySelector("#two-button");
twoButton.addEventListener("click", (event) => {
  if (!firstNumber || !operator) {
    firstNumber = firstNumber + event.target.value;
    display.value = firstNumber;
  } else {
    secondNumber += event.target.value;
    display.value = secondNumber;
  }
});
const threeButton = document.querySelector("#three-button");
threeButton.addEventListener("click", (event) => {
  if (!firstNumber || !operator) {
    firstNumber = firstNumber + event.target.value;
    display.value = firstNumber;
  } else {
    secondNumber += event.target.value;
    display.value = secondNumber;
  }
});
const fourButton = document.querySelector("#four-button");
fourButton.addEventListener("click", (event) => {
  if (!firstNumber || !operator) {
    firstNumber = firstNumber + event.target.value;
    display.value = firstNumber;
  } else {
    secondNumber += event.target.value;
    display.value = secondNumber;
  }
});
const fiveButton = document.querySelector("#five-button");
fiveButton.addEventListener("click", (event) => {
  if (!firstNumber || !operator) {
    firstNumber = firstNumber + event.target.value;
    display.value = firstNumber;
  } else {
    secondNumber += event.target.value;
    display.value = secondNumber;
  }
});
const sixButton = document.querySelector("#six-button");
sixButton.addEventListener("click", (event) => {
  if (!firstNumber || !operator) {
    firstNumber = firstNumber + event.target.value;
    display.value = firstNumber;
  } else {
    secondNumber += event.target.value;
    display.value = secondNumber;
  }
});
const sevenButton = document.querySelector("#seven-button");
sevenButton.addEventListener("click", (event) => {
  if (!firstNumber || !operator) {
    firstNumber = firstNumber + event.target.value;
    display.value = firstNumber;
  } else {
    secondNumber += event.target.value;
    display.value = secondNumber;
  }
});
const eightButton = document.querySelector("#eight-button");
eightButton.addEventListener("click", (event) => {
  if (!firstNumber || !operator) {
    firstNumber = firstNumber + event.target.value;
    display.value = firstNumber;
  } else {
    secondNumber += event.target.value;
    display.value = secondNumber;
  }
});
const nineButton = document.querySelector("#nine-button");
nineButton.addEventListener("click", (event) => {
  if (!firstNumber || !operator) {
    firstNumber = firstNumber + event.target.value;
    display.value = firstNumber;
  } else {
    secondNumber += event.target.value;
    display.value = secondNumber;
  }
});

const dotButton = document.querySelector("#dot-button");
