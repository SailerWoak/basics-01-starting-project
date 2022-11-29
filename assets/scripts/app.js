const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calDescription);

}
function add(){
    const enteredNumbers = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumbers;
    createAndWriteOutput('+', initialResult, enteredNumbers)
}

function subtract() {
    const enteredNumbers = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumbers;
    createAndWriteOutput('-', initialResult, enteredNumbers)
}

function multiply() {
    const enteredNumbers = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumbers;
    createAndWriteOutput('*', initialResult, enteredNumbers)
}

function divide() {
    const enteredNumbers = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumbers;
    createAndWriteOutput('/', initialResult, enteredNumbers)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

//currentResult =  add(1, 2);
//let calculationDescription = `(${defaultResult} + 10) 3 * / 2 - 1`;



