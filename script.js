const firstNum = prompt("inserisci il primo numero");
const secondNum = prompt("inserisci il secondo numero");
const operationChoice = prompt(
  "inserisci +=sum -=sub *=mul /=div per scegliere l'operazione desiderata"
);
const parsedFirstNum = parseInt(firstNum);
const parsedSecondNum = parseInt(secondNum);
function calculator() {
  const num1 = parseInt(firstNum);
  const num2 = parseInt(secondNum);
  if (operationChoice === "+") {
    return num1 + num2;
  }
  if (operationChoice === "-") {
    return num1 - num2;
  }
  if (operationChoice === "/") {
    return num1 / num2;
  }
  if (operationChoice === "*") {
    return num1 * num2;
  }
}

if (firstNum.length === 0 || secondNum.length === 0) {
  console.error("Non hai inserito un numero");
}

if (operationChoice.length === 0) {
  console.error("non hai inserito un operatore");
}

if (operationChoice === "/" && secondNum < 1) {
  console.error("nessun numero è divisibile per per 0");
}

alert("il risultato della tua operazione è :" + calculator());
