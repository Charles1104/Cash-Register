
var calculator = calculatorModule();
var displayFunctions = app();
var currentNumber = 0;
var operator = null;
var balance = 0;
var accountingButton = false;
var numberButton = document.querySelectorAll(".number");

for (var i = 0; i < numberButton.length ; i++) {
  numberButton[i].addEventListener("click", function(){

    if (operator === "equal"){
      displayFunctions.clearDisplay();
      operator = null;
      display.innerHTML += displayFunctions.decimalDollars((String(this.id.slice(6))));
    }

    else if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
      displayFunctions.clearDisplay();
      display.innerHTML += displayFunctions.decimalDollars((String(this.id.slice(6))));
    }

    else if (accountingButton === true){
      displayFunctions.clearDisplay();
      accountingButton = false;
      display.innerHTML = displayFunctions.decimalDollars((String(this.id.slice(6))));
    }

    else if (display.innerHTML === "") {
      display.innerHTML += displayFunctions.decimalDollars((String(this.id.slice(6))));
    }

    else{
      display.innerHTML += (String(this.id.slice(6)));
      displayFunctions.decimalDollars(display.innerHTML);
    }

  });
}

document.querySelector("#buttonEqual").addEventListener("click", function(){
  if (typeof operator === "function"){
    if (operator === calculator.divide && displayFunctions.reverseDecimalDollars(display.innerHTML) === 0 ){
      alert("You can not divide by 0");
      displayFunctions.clearDisplay();
    }
    else {
      operator(displayFunctions.reverseDecimalDollars(display.innerHTML));
      display.innerHTML = displayFunctions.decimalDollars(calculator.getTotal());
      operator = "equal";
    }
  }
});


document.querySelector("#buttonAdd").addEventListener("click", function(){
  if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
    alert("An operator has to be followed by a number ! PLease start all over");
    displayFunctions.clearDisplay();
    calculator.load(0);
    }
  else {
    calculator.load(displayFunctions.reverseDecimalDollars(display.innerHTML));
    operator = calculator.add;
    display.innerHTML = "+";
  }
});

document.querySelector("#buttonMultiply").addEventListener("click", function(){
  if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
    alert("An operator has to be followed by a number ! PLease start all over");
    displayFunctions.clearDisplay();
    calculator.load(0);
  }
  else{
    calculator.load(displayFunctions.reverseDecimalDollars(display.innerHTML));
    operator = calculator.multiply;
    display.innerHTML = "*";
  }
});

document.querySelector("#buttonSubtract").addEventListener("click", function(){
  if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
    alert("An operator has to be followed by a number ! PLease start all over");
    displayFunctions.clearDisplay();
    calculator.load(0);
  }
  else{
    calculator.load(displayFunctions.reverseDecimalDollars(display.innerHTML));
    operator = calculator.subtract;
    display.innerHTML = "-";
  }
});

document.querySelector("#buttonDivide").addEventListener("click", function(){
  if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
    alert("An operator has to be followed by a number ! PLease start all over");
    displayFunctions.clearDisplay();
    calculator.load(0);
  }
  else {
    calculator.load(displayFunctions.reverseDecimalDollars(display.innerHTML));
    operator = calculator.divide;
    display.innerHTML = "/";
  }
});

document.querySelector("#buttonClear").addEventListener("click", function(){
  displayFunctions.clearDisplay();
  calculator.load(0);
});

document.querySelector("#buttonDepositCash").addEventListener("click", function(){
  if (displayFunctions.reverseDecimalDollars(display.innerHTML) < 0){
     alert("You can not deposit negative values");
  }
  else{
    balance += displayFunctions.reverseDecimalDollars(display.innerHTML);
    displayFunctions.clearDisplay();
  }
});

document.querySelector("#buttonWithdrawCash").addEventListener("click", function(){
  if (displayFunctions.reverseDecimalDollars(display.innerHTML) > balance){
    alert("Your balance is currently " + balance + ". You cannot withdraw more than this amount. Please withdraw an amout up to your balance" );
  }
  else {
    balance -= displayFunctions.reverseDecimalDollars(display.innerHTML);
    displayFunctions.clearDisplay();
  }
});

document.querySelector("#buttonGetBalance").addEventListener("click", function(){
  display.innerHTML = displayFunctions.decimalDollars(balance);
  accountingButton = true;
});


