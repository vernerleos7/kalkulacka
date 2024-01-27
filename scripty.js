function updateInput(value) {
    document.getElementById('input').value = value;
}

function appendToInput(value) {
    const currentInput = document.getElementById('input').value;
    updateInput(currentInput + value);
}

function calculate() {
    const inputExpression = document.getElementById('input').value;
    let result;

    try {
        result = eval(inputExpression);
    } catch (error) {
        result = 'Chybný výraz';
    }

    updateInput(isNaN(result) ? 'Neplatný vstup' : result);
}

function calculateFactorial() {
    const inputNumber = parseFloat(document.getElementById('input').value);

    if (!isNaN(inputNumber) && inputNumber >= 0 && Number.isInteger(inputNumber)) {
        let result = 1;
        for (let i = 2; i <= inputNumber; i++) {
            result *= i;
        }
        updateInput(result);
    } else {
        updateInput('Neplatný vstup pro faktoriál');
    }
}

function calculateFibonacci() {
    const inputNumber = parseFloat(document.getElementById('input').value);

    if (!isNaN(inputNumber) && inputNumber >= 0 && Number.isInteger(inputNumber)) {
        let a = 0, b = 1;
        for (let i = 2; i <= inputNumber; i++) {
            const temp = a + b;
            a = b;
            b = temp;
        }
        updateInput(a);
    } else {
        updateInput('Neplatný vstup pro Fibonacciho posloupnost');
    }
}

function calculateCos() {
    const inputNumber = parseFloat(document.getElementById('input').value);
    const result = Math.cos(inputNumber);
    updateInput(result);
}

function calculateSin() {
    const inputNumber = parseFloat(document.getElementById('input').value);
    const result = Math.sin(inputNumber);
    updateInput(result);
}

function calculateLog() {
    const inputNumber = parseFloat(document.getElementById('input').value);

    if (!isNaN(inputNumber) && inputNumber > 0) {
        const result = Math.log10(inputNumber);
        updateInput(result);
    } else {
        updateInput('Neplatný vstup pro logaritmus');
    }
}

function clearInput() {
    updateInput('');
}
