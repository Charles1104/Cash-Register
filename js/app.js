
var app = (function (){

  function clearDisplay() {
    display.innerHTML = "";
  }

  function decimalDollars(string){
    return String("$ " + string) ;
  }

  function reverseDecimalDollars(string){
    return Number(string.slice(2));
  }


    return {
      clearDisplay,
      decimalDollars,
      reverseDecimalDollars
  };


});


