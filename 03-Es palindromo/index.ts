//Dado un entero x, devuelve true si x es unpalíndromo, y false de otro modo .

var isPalindrome = function(x) { 
    var entero = x.toString();
    var reversaEntero = entero.split("").reverse().join("");
   return entero === reversaEntero
  };