//transformar el numero Romano a entero.

var romanToInt = function(s) {
    var tablaNumerosRomanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D:500,
        M: 1000
        
    }
    var total = 0;
    for(let i = 0; i<s.length; i++){
        var letraActual = tablaNumerosRomanos[s[i]];
        var letraSiguiente =tablaNumerosRomanos[s[i+1]]
        if (letraActual < letraSiguiente){
            total-= letraActual
        }else{
            total +=letraActual
        }
    }
    
    return total;
    
};