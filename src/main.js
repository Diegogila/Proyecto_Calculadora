const outputNode = document.querySelector(".calculator__output");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let number;
let operatorSelect = null;


const selectNumber = (number) => {

        outputNode.innerText += number;

}

const selectOperator = (operator) => {
    if (operatorSelect == null) {
        operatorSelect = operator;
        outputNode.innerText = null;
    } else{
        const result = calc(parseInt(outputNode.innerText),5,operator);
        console.log(result,operator);
        outputNode.innerText = result;
    }
    
}


for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    element.addEventListener("click", () => {
        selectNumber(element.innerText);
    });
    
}

for (let index = 0; index < operators.length; index++) {
    const element = operators[index];
    element.addEventListener("click", () => {
        selectOperator(element.innerText);
    });
    
}


const calc = (num1,num2,arit) => {
    let result;
    switch (arit) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        
        default:
            break;
    }
    return result;
};
