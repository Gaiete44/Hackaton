<?php

// Function to get a number from user input
function getNumber($prompt) {
    return (float)readline($prompt);
}

// Function to get the operation from user input
function getOperation() {
    return readline("Enter operation (+, -, *, /): ");
}

// Function to perform the calculation based on the operation
function calculate($num1, $num2, $operation) {
    switch ($operation) {
        case "+":
            return $num1 + $num2;
        case "-":
            return $num1 - $num2;
        case "*":
            return $num1 * $num2;
        case "/":
            if ($num2 != 0) {
                return $num1 / $num2;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "Invalid operation!";
    }
}

// Main script
echo "Simple Calculator\n";

do {
    $num1 = getNumber("Enter first number: ");
    $operation = getOperation();
    $num2 = getNumber("Enter second number: ");
    $result = calculate($num1, $num2, $operation);

    echo "Result: $result\n";

    $continue = readline("Do you want to perform another calculation? (yes/no): ");
} while (strtolower($continue) == "yes");

echo "Thank you for using the calculator!\n";

?>
