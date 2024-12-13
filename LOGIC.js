const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "clear") {
      currentInput = "";
      previousInput = "";
      operator = null;
      display.textContent = "0";
      return;
    }

    if (value === "=") {
      if (currentInput && previousInput && operator) {
        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
        display.textContent = currentInput;
        previousInput = "";
        operator = null;
      }
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput) {
        previousInput = currentInput;
        currentInput = "";
        operator = value;
        display.textContent = `${previousInput} ${value}`; // Show the operator in the input bar
      }
      return;
    }

    currentInput += value;
    display.textContent = operator 
      ? `${previousInput} ${operator} ${currentInput}` // Show full expression when operator is selected
      : currentInput; // Show only current input if no operator
  });
});
