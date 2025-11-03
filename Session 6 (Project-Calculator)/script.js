let display = document.getElementById('display');
function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}
function clearDisplay() {
    display.value = '0';
}function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}
function calculate() {
    try {
        let expression = display.value.replace(/×/g, '*');
        let result = eval(expression);
        if (result === Infinity || result === -Infinity) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (e) {
        display.value = 'Error';
    }
}
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '/' || key === '(' || key === ')') {
        appendToDisplay(key);
    } else if (key === '*') {
        appendToDisplay('×');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        backspace();
    }
});
