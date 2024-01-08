const calculator = document.getElementById("calculator-wrapper");
const displayer = document.getElementById("displayer");

console.log("Git test");

calculator.addEventListener('click', function (e) {
  if (e.target.classList.contains('calc-btn')) {
    if (e.target.innerText === "=") {
      calc();
    } else {
      displayer.innerText += e.target.innerText;
    }
  } else if (e.target.classList.contains('utility-btn')) {
    if (e.target.innerText === "CE") {
      displayer.innerText = "";
    } else if (e.target.innerText === "DEL") {
      displayer.innerText = displayer.innerText.slice(0, -1);
    }
  }
});

function calc() {
  let expression = displayer.innerText;
  expression = expression.replaceAll("×", "*");
  expression = expression.replaceAll("÷", "/");
  console.log(expression);

  try {
    let result = eval(expression);
    displayer.innerText = result;
  } catch {
    displayer.innerText = "Error";
  }
}