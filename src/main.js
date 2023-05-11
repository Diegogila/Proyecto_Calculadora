//-----------Variables------------------------//

let numberSaved = 0;
let operatorSelect = null;
let flag = 0;

//-----------Functions-----------------------//

const reset = () => {
  numberSaved = 0;
  operatorSelect = null;
  flag = 0;
  outputNode.innerText = null;
};

const selectNumber = (number) => {
  if (flag == 0) {
    outputNode.innerText += number;
  } else {
    outputNode.innerText = number;
    flag = 0;
  }
};

const selectOperator = (operator) => {
  console.log(operator, operatorSelect, numberSaved);
  if (operatorSelect == null) {
    operatorSelect = operator;
    numberSaved = Number(outputNode.innerText);
  } else {
    const result = calc(
      numberSaved,
      Number(outputNode.innerText),
      operatorSelect
    );
    outputNode.innerText = result;
    if (operator != "=") {
      operatorSelect = operator;
    } else {
      operatorSelect = null;
    }
    numberSaved = result;
  }
  flag = 1;
};

const calc = (num1, num2, arit) => {
  let result;
  switch (arit) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "÷":
      if ((num1 == 0) | (num2 == 0)) {
        alert("No se puede dividir entre cero");
      } else {
        result = num1 / num2;
      }
      break;
    default:
      break;
  }
  return result;
};

//-----------------------Start Program-----------------------------------------//

(() => {
  restartButton.addEventListener("click", reset);

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
})();
