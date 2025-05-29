function calculate() {
    // Read input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    // Check if input is valid
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers!";
        return;
    }

    let result;
    let isFaulty = Math.random() < 0.1; // 10% chance of being faulty

    if (isFaulty) {
        // Faulty calculations (for fun)
        if (operation === '+') result = num1 - num2;
        else if (operation === '-') result = num1 / num2;
        else if (operation === '*') result = num1 + num2;
        else if (operation === '/') result = num2 !== 0 ? num1 ** num2 : "Can't raise to power zero!";
    } else {
        // Correct calculations
        if (operation === '+') result = num1 + num2;
        else if (operation === '-') result = num1 - num2;
        else if (operation === '*') result = num1 * num2;
        else if (operation === '/') {
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Division by zero not allowed!";
            }
        }
    }

    // Display result
    document.getElementById('result').innerText = `Result: ${result}`;
}
