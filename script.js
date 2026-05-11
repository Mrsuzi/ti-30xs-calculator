let currentInput = '0';
let history = '';

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
    document.getElementById('history').innerText = history;
}

function appendNumber(num) {
    if (currentInput === '0') currentInput = num;
    else currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    history = currentInput + ' ' + op;
    currentInput = '0';
    updateDisplay();
}

function calculate() {
    try {
        let expression = history + ' ' + currentInput;
        // Basic safety replacement for eval
        let result = eval(expression.replace('×', '*').replace('÷', '/'));
        history = expression + ' =';
        currentInput = result.toString();
        updateDisplay();
    } catch (e) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function clearScreen() {
    currentInput = '0';
    history = '';
    updateDisplay();
}

function mathFunc(type) {
    let val = parseFloat(currentInput);
    if (type === 'sin') currentInput = Math.sin(val).toFixed(4);
    if (type === 'cos') currentInput = Math.cos(val).toFixed(4);
    if (type === 'tan') currentInput = Math.tan(val).toFixed(4);
    if (type === 'sqrt') currentInput = Math.sqrt(val).toFixed(4);
    if (type === 'pow') currentInput = Math.pow(val, 2).toString();
    updateDisplay();
}

function deleteChar() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay();
}