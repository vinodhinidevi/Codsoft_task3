const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }
    if (resultDisplayed) {
      if (!isNaN(value)) {
          // If it's a number, start new input
          currentInput = value;
      } else {
          // If it's an operator, continue with the result
          currentInput += value;
      }
      resultDisplayed = false;
  } else {
      currentInput += value;
  }
    display.textContent = currentInput;
  });
});
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (/\d/.test(key) || ['+', '-', '*', '/', '.'].includes(key)) {
      currentInput += key;
      display.textContent = currentInput;
  } else if (key === 'Enter' || key === '=') {
      try {
          currentInput = eval(currentInput).toString();
          display.textContent = currentInput;
          resultDisplayed = true;
      } catch {
          display.textContent = 'Error';
          currentInput = '';
      }
  } else if (key === 'Backspace') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
  } else if (key.toLowerCase() === 'c') {
      currentInput = '';
      display.textContent = '0';
  }
});