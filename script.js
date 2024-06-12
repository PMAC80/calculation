let currentInput = '0'; // Variable para almacenar la entrada actual del usuario

function clearDisplay() {
    currentInput = '0'; // Reinicia la entrada a '0'
    updateDisplay(); // Actualiza el display
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number; // Reemplaza '0' por el número seleccionado
    } else {
        currentInput += number; // Concatena el número seleccionado
    }
    updateDisplay(); // Actualiza el display
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.'; // Añade el punto decimal si no está presente
        updateDisplay(); // Actualiza el display
    }
}

function appendOperator(operator) {
    currentInput += operator; // Concatena el operador seleccionado
    updateDisplay(); // Actualiza el display
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString(); // Evalúa la expresión y la convierte a string
        updateDisplay(); // Actualiza el display
    } catch (error) {
        currentInput = 'Error'; // Manejo de errores
        updateDisplay(); // Actualiza el display
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput; // Actualiza el contenido del display
}
