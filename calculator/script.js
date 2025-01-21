// script.js

// Function to append a value to the display
function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
  }
  
  // Function to calculate the result
  function calculate() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
      display.value = "Error";
    }
  }