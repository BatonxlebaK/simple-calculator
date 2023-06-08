//buttons
let buttonAdd = document.querySelector("#add");
let buttonSubtraction = document.querySelector("#subtraction");
let buttonMultiply = document.querySelector("#multiply");
let buttonDivision = document.querySelector("#division");



//scripts
buttonAdd.addEventListener("click", () => {
    let input1 = document.querySelector("#num1");
    let num1 = +input1.value;
    let input2 = document.querySelector("#num2");
    let num2 = +input2.value;
    let resultInput = document.querySelector("#result");
    let result = num1 + num2;
    resultInput.value = result;
});
buttonSubtraction.addEventListener("click", () => {
    let input1 = document.querySelector("#num1");
    let num1 = +input1.value;
    let input2 = document.querySelector("#num2");
    let num2 = +input2.value;
    let resultInput = document.querySelector("#result");
    let result = num1 - num2;
    resultInput.value = result;
});
buttonMultiply.addEventListener("click", () => {
    let input1 = document.querySelector("#num1");
    let num1 = +input1.value;
    let input2 = document.querySelector("#num2");
    let num2 = +input2.value;
    let resultInput = document.querySelector("#result");
    let result = num1 * num2;
    resultInput.value = result;
});
buttonDivision.addEventListener("click", () => {
    let input1 = document.querySelector("#num1");
    let num1 = +input1.value;
    let input2 = document.querySelector("#num2");
    let num2 = +input2.value;
    let resultInput = document.querySelector("#result");
    let result = num1 / num2;
    resultInput.value = result;
});