
var calculator = calculatorModule();
var functions = app();
var currentNumber = 0;
var calculatorFunction = null;
var balance = 0;
var accountingButton = false;

var NumberButton = document.getElementsByClassName("number");

for (var i = 0; i < NumberButton.length ; i++) {
  NumberButton[i].addEventListener("click", function(){

    if (calculatorFunction === "equal"){

      functions.clearDisplay();
      calculatorFunction = null;
      display.innerHTML += functions.decimalDollars((String(this.id.slice(6))));
    }

    else if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
      functions.clearDisplay();
      display.innerHTML += functions.decimalDollars((String(this.id.slice(6))));
    }

    else if (accountingButton === true){

    functions.clearDisplay();
    accountingButton = false;
    display.innerHTML = functions.decimalDollars((String(this.id.slice(6))));
    }

    else if (display.innerHTML === "") {
      display.innerHTML += functions.decimalDollars((String(this.id.slice(6))));
    }

    else{
      display.innerHTML += (String(this.id.slice(6)));
      functions.decimalDollars(display.innerHTML);
    }

  });
}

document.getElementById("buttonEqual").addEventListener("click", function(){
  if (typeof calculatorFunction === "function"){
    calculatorFunction(functions.reverseDecimalDollars(display.innerHTML));
    display.innerHTML = functions.decimalDollars(calculator.getTotal());
    calculatorFunction = "equal";
  }
});


document.getElementById("buttonAdd").addEventListener("click", function(){
  if (display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/"){
    alert("An operator has to be followed by a number ! PLease start all over");
    functions.clearDisplay();
    calculator.load(0);
    } else {
    calculator.load(functions.reverseDecimalDollars(display.innerHTML));
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
  calculator.load(functions.reverseDecimalDollars(display.innerHTML));
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
  calculator.load(functions.reverseDecimalDollars(display.innerHTML));
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
  calculator.load(functions.reverseDecimalDollars(display.innerHTML));
  calculatorFunction = calculator.divide;
  display.innerHTML = "/";
  }
});

document.getElementById("buttonClear").addEventListener("click", function(){
  functions.clearDisplay();
  calculator.load(0);
});

document.getElementById("buttonDepositCash").addEventListener("click", function(){
  balance += functions.reverseDecimalDollars(display.innerHTML);
  functions.clearDisplay();
});

document.getElementById("buttonWithdrawCash").addEventListener("click", function(){
  if (functions.reverseDecimalDollars(display.innerHTML) > balance){
    alert("Your balance is currently " + balance + ". You cannot withdraw more than this amount. Please withdraw an amout up to your balance" );
  } else {
  balance -= functions.reverseDecimalDollars(display.innerHTML);
  functions.clearDisplay();
  }
});

document.getElementById("buttonGetBalance").addEventListener("click", function(){
  display.innerHTML = functions.decimalDollars(balance);
  accountingButton = true;
});


