(function () {
  "use strict";

  const state = {
    displayNumber: '0',
    firstOperand: null,
    needInput: false,
    operator: null
  };

  const handleNumber = function(n) {
    const { displayNumber, needInput } = state;
    if (needInput === false) {
      state.displayNumber = displayNumber === '0' ? n : displayNumber + n;
    }
    else {
      state.displayNumber = n;
      state.needInput = false;
    }
  }

  const handleOperator = function(op) {
    const { firstOperand, displayNumber, operator } = state;
    const inputNumber = parseFloat(displayNumber);
    if (operator && state.needInput) {
      state.operator = op;
      return;
    }
    if (firstOperand == null && !isNaN(inputNumber)) {
      state.firstOperand = inputNumber;
    }
    else if (operator) {
      const result = calculate(firstOperand, inputNumber, operator);
      state.displayNumber = `${parseFloat(result.toFixed(5))}`;
      state.firstOperand = result;
    }
    state.needInput = true;
    state.operator = op;
  }

  const calculate = function(a, b, op) {
    switch(op) {
      case '*': return a * b;
      case '/': return a / b;
      case '+': return a + b;
      case '-': return a - b;
    }
  }

  const handleDecimal = function(d) {
    if (state.needInput === true) {
      state.displayNumber = "0.";
      state.needInput = false;
      return
    }
    if (!state.displayNumber.includes(d)) {
      state.displayNumber += d;
    }
  }

  const handleClear = function() {
    state.displayNumber = '0';
    state.firstOperand = null;
    state.needInput = false;
    state.operator = null;
  }
  
  const buttons = document.querySelector('.calculator-buttons');
  buttons.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    }
    switch (value) {
      case '*':
      case '/':
      case '+':
      case '-':
        handleOperator(value);
        break;
      case '.':
        handleDecimal(value);
        break;
      case 'C':
        handleClear();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          handleNumber(value);
        }
    }
    const display = document.querySelector('.calculator-display');
    display.value = state.displayNumber;
  });
}());