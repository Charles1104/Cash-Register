
var calculator = calculatorModule();
var functions = app();
var currentNumber = 0;
var calculatorFunction;
var balance = 0;
var accountingButton = false;

var NumberButton = document.getElementsByClassName("number");

for (var i = 0; i < NumberButton.length ; i++) {
  NumberButton[i].addEventListener("click", function(){
    if (calculatorFunction === "equal"){
      functions.clearDisplay();
      calculatorFunction = null;
      display.innerHTML += (String(this.id.slice(6)));
    } else if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
      functions.clearDisplay();
      display.innerHTML += (String(this.id.slice(6)));
    } else if (accountingButton === true){
    functions.clearDisplay();
    accountingButton = false;
    display.innerHTML = (String(this.id.slice(6)));
    } else{
      display.innerHTML += (String(this.id.slice(6)));
    }
  });
}

document.getElementById("buttonEqual").addEventListener("click", function(){
  calculatorFunction(Number(display.innerHTML));
  display.innerHTML = calculator.getTotal();
  calculatorFunction = "equal";
});


document.getElementById("buttonAdd").addEventListener("click", function(){
  if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
    alert("An operator has to be followed by a number ! PLease start all over");
    functions.clearDisplay();
    calculator.load(0);
    } else {
    calculator.load(Number(display.innerHTML));
    calculatorFunction = calculator.add;
    display.innerHTML = "+";
  }
});

document.getElementById("buttonMultiply").addEventListener("click", function(){
  if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
    alert("An operator has to be followed by a number ! PLease start all over");
    functions.clearDisplay();
    calculator.load(0);
  } else{
  calculator.load(Number(display.innerHTML));
  calculatorFunction = calculator.multiply;
  display.innerHTML = "*";
  }
});

document.getElementById("buttonSubtract").addEventListener("click", function(){
  if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
    alert("An operator has to be followed by a number ! PLease start all over");
    functions.clearDisplay();
    calculator.load(0);
  } else{
  calculator.load(Number(display.innerHTML));
  calculatorFunction = calculator.subtract;
  display.innerHTML = "-";
  }
});

document.getElementById("buttonDivide").addEventListener("click", function(){
  if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
    alert("An operator has to be followed by a number ! PLease start all over");
    functions.clearDisplay();
    calculator.load(0);
  } else{
  calculator.load(Number(display.innerHTML));
  calculatorFunction = calculator.divide;
  display.innerHTML = "/";
  }
});

document.getElementById("buttonClear").addEventListener("click", function(){
  functions.clearDisplay();
  calculator.load(0);
});

document.getElementById("buttonDepositCash").addEventListener("click", function(){
  balance += Number(display.innerHTML);
  functions.clearDisplay();
});

document.getElementById("buttonWithdrawCash").addEventListener("click", function(){
  balance -= Number(display.innerHTML);
  functions.clearDisplay();
});

document.getElementById("buttonGetBalance").addEventListener("click", function(){
  display.innerHTML = balance;
  accountingButton = true;
});


