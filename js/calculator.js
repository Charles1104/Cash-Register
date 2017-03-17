/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 var calculatorModule = (function () {

  //private variables
  var memory = 0;
  var total = 0;
  var calculator = {};


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  calculator.load = function(number){
    if (isNumber(number)){
      total = number;
      return total;
    }

  };


  /**
   * Return the value of `total`
   * @return { Number }
   */

   calculator.getTotal = function(){
    return total;
   };


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   calculator.add = function (number){
    if (isNumber(number)){
      total += number;
      }
   };


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   calculator.subtract = function (number){
    if (isNumber(number)){
      total -= number;
    }
   };



  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

    calculator.multiply = function (number){
    if (isNumber(number)){
      total *= number;
    }
   };


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
    calculator.divide = function (number){
    if (isNumber(number)){
      total /= number;
    }
   };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   calculator.recallMemory = function(){
    return memory;
   };
  /**
   * Stores the value of `total` to `memory`
   */
   calculator.saveMemory = function (){
    memory = total;
   };

  /**
   * Clear the value stored at `memory`
   */

   calculator.clearMemory = function(){
    memory = 0;
   };


  /**
   * Validation
   */

  function isNumber(testValue) {
    if (typeof testValue === "number") {
      return true;
    }
    else {
     throw new Error('Wrong data type you dummy');
    }
  }

  return calculator;
 });


