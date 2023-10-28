"use strict";

document.addEventListener("DOMContentLoaded", () => {
  //variable storage such as first number, second number and all the buttons as well as the display

  let firstNumber = "";
  let secondNumber = "";
  let operator = "";
  let calculatorDisplay = document.querySelector(".calculatorDisplay");

  const clear = document.querySelector(".clear");

  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");
  const four = document.querySelector(".four");
  const five = document.querySelector(".five");
  const six = document.querySelector(".six");
  const seven = document.querySelector(".seven");
  const eight = document.querySelector(".eight");
  const nine = document.querySelector(".nine");
  const zero = document.querySelector(".zero");

  const multiply = document.querySelector(".divide");
  const divide = document.querySelector(".mulitply");
  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  const equal = document.querySelector(".equal");

  // indicator that detects if operator was clicked so the second number can get defined instead of the first one if false

  let operatorToggle = true;

  // object that handles the calculator operations and all the functions it needs to work properly

  const calculate = {
    plus: (firstNumber, secondNumber) => {
      return +firstNumber + +secondNumber;
    },
    minus: (firstNumber, secondNumber) => {
      return +firstNumber - +secondNumber;
    },
    multiply: (firstNumber, secondNumber) => {
      return +firstNumber * +secondNumber;
    },
    divide: (firstNumber, secondNumber) => {
      return +firstNumber / +secondNumber;
    },
  };

  const clearCalculator = () => {
    calculatorDisplay.textContent = "";
    firstNumber = "";
    secondNumber = "";
  };

  const endCalculation = (result) => {
    firstNumber = result;
    secondNumber = "";
  };

  // click listener that redirects every click to the right operation

  document.addEventListener("click", (e) => {
    switch (e.target.className) {
      case "one":
        if (operatorToggle) {
          firstNumber += "1";
          calculatorDisplay.textContent += "1";
        } else if (!operatorToggle) {
          secondNumber += "1";
          calculatorDisplay.textContent += "1";
        }
        e.stopPropagation();
        break;
      case "two":
        if (operatorToggle) {
          firstNumber += "2";
          calculatorDisplay.textContent += "2";
        } else if (!operatorToggle) {
          secondNumber += "2";
          calculatorDisplay.textContent += "2";
        }
        e.stopPropagation();
        break;
      case "three":
        if (operatorToggle) {
          firstNumber += "3";
          calculatorDisplay.textContent += "3";
        } else if (!operatorToggle) {
          secondNumber += "3";
          calculatorDisplay.textContent += "3";
        }
        e.stopPropagation();
        break;
      case "four":
        if (operatorToggle) {
          firstNumber += "4";
          calculatorDisplay.textContent += "4";
        } else if (!operatorToggle) {
          secondNumber += "4";
          calculatorDisplay.textContent += "4";
        }
        e.stopPropagation();
        break;
      case "five":
        if (operatorToggle) {
          firstNumber += "5";
          calculatorDisplay.textContent += "5";
        } else if (!operatorToggle) {
          secondNumber += "5";
          calculatorDisplay.textContent += "5";
        }
        e.stopPropagation();
        break;
      case "six":
        if (operatorToggle) {
          firstNumber += "6";
          calculatorDisplay.textContent += "6";
        } else if (!operatorToggle) {
          secondNumber += "6";
          calculatorDisplay.textContent += "6";
        }
        e.stopPropagation();
        break;
      case "seven":
        if (operatorToggle) {
          firstNumber += "7";
          calculatorDisplay.textContent += "7";
        } else if (!operatorToggle) {
          secondNumber += "7";
          calculatorDisplay.textContent += "7";
        }
        e.stopPropagation();
        break;

      case "eight":
        if (operatorToggle) {
          firstNumber += "8";
          calculatorDisplay.textContent += "8";
        } else if (!operatorToggle) {
          secondNumber += "8";
          calculatorDisplay.textContent += "8";
        }
        e.stopPropagation();
        break;
      case "nine":
        if (operatorToggle) {
          firstNumber += "9";
          calculatorDisplay.textContent += "9";
        } else if (!operatorToggle) {
          secondNumber += "9";
          calculatorDisplay.textContent += "9";
        }
        e.stopPropagation();
        break;
      case "zero":
        if (operatorToggle) {
          firstNumber += "0";
          calculatorDisplay.textContent += "0";
        } else if (!operatorToggle) {
          secondNumber += "0";
          calculatorDisplay.textContent += "0";
        }
        e.stopPropagation();
        break;
      case "komma":
        if (operatorToggle) {
          firstNumber += ".";
          calculatorDisplay.textContent += ".";
        } else if (!operatorToggle) {
          secondNumber += ".";
          calculatorDisplay.textContent += ".";
        }
      case "divide":
        if (operatorToggle) {
          calculatorDisplay.textContent += " / ";
          operatorToggle = false;
          operator = "divide";
        }
        e.stopPropagation();
        break;
      case "multiply":
        if (operatorToggle) {
          calculatorDisplay.textContent += " x ";
          operatorToggle = false;
          operator = "multiply";
        }
        e.stopPropagation();
        break;
      case "plus":
        if (operatorToggle) {
          calculatorDisplay.textContent += " + ";
          operatorToggle = false;
          operator = "plus";
        }
        e.stopPropagation();
        break;

      case "minus":
        if (operatorToggle) {
          calculatorDisplay.textContent += " - ";
          operatorToggle = false;
          operator = "minus";
        }
        e.stopPropagation();
        break;

      case "clear":
        clearCalculator();
        e.stopPropagation();
        break;

      case "equal":
        if (operatorToggle) {
        } else if (!operatorToggle) {
          if (
            calculate[operator](firstNumber, secondNumber).toString().length >=
            10
          ) {
            calculatorDisplay.textContent =
              calculate[operator](firstNumber, secondNumber)
                .toString()
                .slice(0, 9) + "...";
          } else {
            calculatorDisplay.textContent = calculate[operator](
              firstNumber,
              secondNumber
            );
          }

          operatorToggle = true;
          endCalculation(calculate[operator](firstNumber, secondNumber));
        }
        e.stopPropagation();
        break;

      default:
        break;
    }
  });
});
