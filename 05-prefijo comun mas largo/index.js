//Escriba una función para encontrar la cadena de prefijo común más larga entre una matriz de cadenas.
//Si no hay un prefijo común, devuelve una cadena vacía "".

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";
      var prefijo= strs[0];
    for(let i = 1; i<strs.length; i++){
         while (strs[i].indexOf(prefijo) !== 0) {
             prefijo = prefijo.slice(0, -1); 
             if (prefijo === "") return ""; 
         }
     }
 
     return prefijo; 
 };