function addition(num1, num2) {
    return num1 + num2
}
function subtraction(num1, num2) {
    return num1 - num2
}
function multiplication(num1, num2) {
    return num1 * num2
}
function division(firstNumber, secondNumber) {
    return num1 / num2
}

function calculator() {
    
let firstNumber = Number(document.getElementById("first").value)
let secondNumber = Number(document.getElementById("second").value)
let operation = document.getElementById("operation").value
let answer = document.getElementById("answer")

switch(operation){
    case "+":
        result = addition(firstNumber, secondNumber)
        break;
    case "-":
        result = subtraction(firstNumber, secondNumber)
        break;
    case "*":
       result =  multiplication(firstNumber, secondNumber)
        break;
    case "/":
       result =  division(firstNumber, secondNumber)
        break;
    default:
     result = "Invalid input"
        break;
}
answer.textContent = `${firstNumber} ${operation} ${secondNumber} = ${result}`
}
