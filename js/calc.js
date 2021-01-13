const numbers = document.getElementsByClassName("number");
Array.from(numbers).forEach(elements => elements.addEventListener("click", addToDisplay));

const opSign = document.querySelectorAll(".operator");
Array.from(opSign).forEach(elements => elements.addEventListener("click", addToDisplay));

const finalResult = document.querySelector(".equal-sign");
finalResult.addEventListener('click', tallyResult)

function addToDisplay(e) {
    let outcome = document.querySelector('#boom');
    let itemClicked = e.path[0].innerHtml;
    if (itemClicked <= 9) {
        let itemNumber = Number(itemClicked);
        outcome.innerHTML += itemNumber;
    } else if (itemClicked === '/' || itemClicked === '*' || itemClicked === '-' || itemClicked === '+') {
        outcome.innerHTML += " " + itemClicked + " ";
    }

    let myParts = outcome.innerHTML.split(" ")
    return myParts;
}

function tallyResult() {
    let outcome = document.querySelector('#boom');
    let myParts = outcome.innerHTML.split(" ")
    let result;
    if (myParts[1] === "+") {
        result = Number(myParts[0]) + Number(myParts[2])
    } else if (myParts[1] === "-") {
        result = Number(myParts[0]) + Number(myParts[2])
    } else if (myParts[1] === "*") {
        result = Number(myParts[0]) + Number(myParts[2])
    }
    else if (myParts[1] === "/") {
        result = Number(myParts[0]) + Number(myParts[2])
    }
    outcome.innerHTML = result
}



/*

//When a user clicks on a number, the number appears in the h2
const numbers = document.getElementsByTagName("span");
Array.from(numbers).forEach(elements => elements.addEventListener("click", addToDisplay))

//When user clicks an operator, the operator appears in the h2

const opSign = document.querySelectorAll(".operator");
Array.from(opSign).forEach(elements => elements.addEventListener("click", addToDisplay))

const finalResult = document.querySelector(".equal-sign");
finalResult.addEventListener("click", tallyResult)

function addToDisplay(e) {
    let outcome = document.querySelector("#beep");
    let itemClicked = e.path[0].innerHTML;
    if (itemClicked <= 9) {
        let itemNumber = Number(itemClicked);
        outcome.innerHTML += itemNumber;
    } else if (itemClicked === "/" || itemClicked === "*" || itemClicked === "-" || itemClicked === "+") {
        outcome.innerHTML += " " + itemClicked + " ";
    }
   let myParts =  outcome.innerHTML.split(" ")
   return myParts;

}

//When user clicks the "=", do math of what is in the h2, and then re assign the h2 to that new value.

function tallyResult() {
    let outcome = document.querySelector("#beep");
    let myParts = outcome.innerHTML.split(" ")
    let result;
    if (myParts[1] === "+") {
        result = Number(myParts[0]) + Number(myParts[2])
    } else if (myParts[1] === "-") {
        result = Number(myParts[0]) - Number(myParts[2])
    } else if (myParts[1] === "*") {
        result = Number(myParts[0]) * Number(myParts[2])
    } else if (myParts[1] === "/") {
        result = Number(myParts[0]) / Number(myParts[2])
    }
    outcome.innerHTML = result
}

*/












/*
// Build - A simple calculator that has two inputs
// and returns the result of +,-,/,* somewhere in the DOM

// add event listener to a button that triggers a function to calculate the inputs the user gives and return the result in the dom

document.querySelector('#calculate').addEventListener('click', calculator)
document.querySelector('#addition').addEventListener('click', assignAddOperator)
document.querySelector('#subtract').addEventListener('click', assignSubOperator)
document.querySelector('#multiply').addEventListener('click', assignMultiOperator)
document.querySelector('#divide').addEventListener('click', assignDivideOperator)

function assignAddOperator(){
    document.querySelector('#addition').classList.toggle('clicked');
    document.querySelector('#subtract').classList.remove('clicked');
    document.querySelector('#multiply').classList.remove('clicked');
    document.querySelector('#divide').classList.remove('clicked');
    let add = document.getElementById('addition').innerHTML
    return add
}
function assignSubOperator(){
    document.querySelector('#addition').classList.remove('clicked');
    document.querySelector('#subtract').classList.toggle('clicked');
    document.querySelector('#multiply').classList.remove('clicked');
    document.querySelector('#divide').classList.remove('clicked');
}
function assignMultiOperator(){
    document.querySelector('#addition').classList.remove('clicked');
    document.querySelector('#subtract').classList.remove('clicked');
    document.querySelector('#multiply').classList.toggle('clicked');
    document.querySelector('#divide').classList.remove('clicked');
}
function assignDivideOperator(){
    document.querySelector('#addition').classList.remove('clicked');
    document.querySelector('#subtract').classList.remove('clicked');
    document.querySelector('#multiply').classList.remove('clicked');
    document.querySelector('#divide').classList.toggle('clicked');
}

function calculator(){

    let operator = document.querySelector('.clicked').innerText
    let result = 0
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)

    if (Number.isInteger(num1) != true || Number.isInteger(num2) != true){
        alert('invalid inputs')
        return
    } else if(operator === "+"){
            result = num1 + num2
        } else if (operator === "-"){
            result = num1 - num2
        } else if (operator === "*"){
            result = num1 * num2
        } else if (operator === "/"){
            result = num1 / num2
        }
    document.querySelector('#result').innerText = ` = ${result}`
}



//test//
document.querySelector('#calculate').addEventListener('click', calculator)
document.querySelector('#addition').addEventListener('click', assignAddOperator)
document.querySelector('#subtract').addEventListener('click', assignSubOperator)
document.querySelector('#multiply').addEventListener('click', assignMultiOperator)
document.querySelector('#divide').addEventListener('click', assignDivideOperator)



*/