var plusOne = function(digits) {
    // let entero= "";
    // for(let i = 0; i<digits.length; i++){
    //      entero += digits[i]
    //  }

    // let resultadoEnNumero = BigInt(entero)
    // let respuestaFinal = resultadoEnNumero + 1n
    // const array = Array.from(String(respuestaFinal), Number);
    // return array
    
    for(let i = digits.length - 1; i >= 0; i--){
    if(digits[i] === 9){
        digits[i] = 0
    }else{
        digits[i] += 1
        return digits;
    }
    }
   return [1, ...digits];
};