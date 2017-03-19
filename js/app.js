
var app = (function (){

  function clearDisplay() {
    display.innerHTML = "";
  }

  function dollars(string){
    return String("$ " + string) ;
  }

  function reverseDollars(string){
    return Number(string.slice(2));
  }

  function decimal(string){
    return Number(string).toFixed(2);
  }


  return {
    clearDisplay,
    dollars,
    reverseDollars,
    decimal
  };


});


