// grab the display

//grabbing all buttons

// const oneBtn = document.querySelector("#no1");
// const twoBtn = document.querySelector("#no2"); 
// const threeBtn = document.querySelector("#no3"); 
// const fourBtn = document.querySelector("#no4"); 
// const fiveBtn = document.querySelector("#no5"); 
// const sixBtn = document.querySelector("#no6"); 
// const sevenBtn = document.querySelector("#no7"); 
// const eightBtn = document.querySelector("#no8"); 
// const nineBtn = document.querySelector("#no9");

// oneBtn.addEventListener("click", function(){
//     changeDisplay(oneBtn);
// });

// function changeDisplay(btn){
//     display.value = btn.innerHTML;
// }


// Adding a single event listener to the buttons container
// Define variables to store operands and operator
let operand1 = "";
let operator = "";

// grab the display
const display = document.querySelector("#display");
display.value = "0";

// grabbing the container element which contains all buttons
const buttonsContainer = document.querySelector(".calc");

// Adding a single event listener to the buttons container
buttonsContainer.addEventListener("click", function(event) {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
        // Get the value of the clicked button
        const buttonValue = event.target.innerHTML;

        if (buttonValue === "C") {
            // If "C" button is clicked, clear the display and reset operands and operator
            display.value = "0";
            operand1 = "";
            operator = "";
        } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
            // If an operator button is clicked, store the current display value as the first operand and the operator
            operand1 = display.value;
            operator = buttonValue;
            display.value = ""; // Clear the display for entering the second operand
        } else if (buttonValue === "=") {
            // If the equals button is clicked, perform the operation
            const operand2 = display.value;
            let result;
            switch (operator) {
                case "+":
                    result = add(parseFloat(operand1), parseFloat(operand2));
                    break;
                case "-":
                    result = sub(parseFloat(operand1), parseFloat(operand2));
                    break;
                case "*":
                    result = multiply(parseFloat(operand1), parseFloat(operand2));
                    break;
                case "/":
                    result = divide(parseFloat(operand1), parseFloat(operand2));
                    break;
            }
            // Display the result
            display.value = result;
            // Set the result as operand1 for potential further calculations
            operand1 = result.toString();
            operator = ""; // Reset the operator
        } else {
            // If current display value is "0" or the display value is "NaN" (due to a previous calculation error), reset the display
            if (display.value === "0" || display.value === "NaN") {
                display.value = buttonValue;
            } else {
                // Concatenate the pressed button's value to the current display value
                display.value += buttonValue;
            }
        }
    }
});

// opeartion functions
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "nah bruh";
    } else {
        return a / b;
    }
}
