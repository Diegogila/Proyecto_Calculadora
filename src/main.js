

const select = (num) => {
    const input = document.querySelector()
};

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

console.log(calc(5,6,'-'));