//Dada una cadena s, encuentre la longitud del valor más largo sin caracteres duplicados.//

var lengthOfLongestSubstring = function (s) {
    let subcadena = ""
    let longitudMasLarga = 0;
    for (let i = 0; i < s.length; i++) {
        let letraActual = s[i]
        if (!subcadena.includes(letraActual)) {
            subcadena += letraActual;
        } else {
            subcadena = subcadena.substring(subcadena.      indexOf(letraActual) + 1) + letraActual;
        }
        
        longitudMasLarga = Math.max(longitudMasLarga, subcadena.length);
    }

    return longitudMasLarga;
};