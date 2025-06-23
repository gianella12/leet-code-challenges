var mySqrt = function(x) {
   let inicio = 0
   let limite = x
   let resultado = 0

  
   while (inicio <= limite) {
     let medio = Math.floor((inicio + limite) / 2)
     let cuadrado = medio * medio
     if(cuadrado === x){
      return medio
     }else if(cuadrado < x){
      resultado = medio;       
      inicio = medio + 1;
    }else{
      limite = medio - 1
    }
   }

   return resultado;
  
   
};