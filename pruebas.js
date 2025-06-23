// var addBinary = function (a, b) {
//   let maxLargo = Math.max(a.length, b.length);
//   let resultado = "";
//   let carry = 0

  
//     a = a.padStart(maxLargo, '0');
//     b = b.padStart(maxLargo, '0');
  
//   for (let i = maxLargo - 1; i >= 0; i--) {
//     const letra1 = Number(a[i]);
//     const letra2 = Number(b[i]);

//     if ((letra1 === 1 && letra2 === 1 && carry === 0) ||
//         (letra1 === 1 && letra2 === 0 && carry === 1) ||
//         (letra1 === 0 && letra2 === 1 && carry === 1)) {
//       carry = 1;
//       resultado = "0" + resultado;
//     } else if (letra1 === 1 && letra2 === 1 && carry === 1) {
//       carry = 1;
//       resultado = "1" + resultado;
//     } else if (letra1 === 0 && letra2 === 0 && carry === 0) {
//       carry = 0;
//       resultado = "0" + resultado;
//     } else if ((letra1 === 0 && letra2 === 0 && carry === 1) ||
//                (letra1 === 1 && letra2 === 0 && carry === 0) ||
//                (letra1 === 0 && letra2 === 1 && carry === 0)) {
//       carry = 0;
//       resultado = "1" + resultado;
//     }
//   }

  
//   if (carry === 1) {
//     resultado = "1" + resultado;
//   }

//   return resultado;
// };
// console.log(addBinary('100', '100'));

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
mySqrt(50)
