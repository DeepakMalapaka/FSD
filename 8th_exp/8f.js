function DenominationCalculator() {
    var userInput = prompt("Enter the number for Denomination calculation:");
    const num = parseInt(userInput);
    
    // Validate input
    if (isNaN(num) || num < 0) {
        alert("The number is invalid. Please enter a positive number.");
        return;
    }

    let remainingAmount = num;
    const denominations = [100, 50, 20, 10, 5, 2, 1];
    const result = {};

    // Calculating notes for each denomination
    for (let denom of denominations) {
        if (remainingAmount >= denom) {
            const count = Math.floor(remainingAmount / denom);
            result[denom] = count;
            remainingAmount %= denom;
        }
    }

    // Display the result
    let required = `For Rs. ${num}, the denominations are:<br>`;
    for (let denom in result) {
        required += `${result[denom]} x ${denom}'s<br>`;
    }

    document.getElementById("output").innerHTML = required;
}
