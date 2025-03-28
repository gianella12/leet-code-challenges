// Dada una cadena sque contiene sólo los caracteres '(', ')', '{', '}'y , determine si la cadena de entrada es válida '['.']'

// Una cadena de entrada es válida si:

// Los corchetes abiertos deben cerrarse con el mismo tipo de corchetes.
// Los corchetes abiertos deben cerrarse en el orden correcto.
// Cada corchete cerrado tiene un corchete abierto correspondiente del mismo tipo.

var isValid = function (s) {
    class pilaDeParentesisAbiertos {
        constructor() {
            this.items = [];
        }
        push(element) {
            this.items.push(element)
        }
        pop() {
            return this.items.pop()
        }
        isEmpty() {
            return this.items.length === 0;
        }
    }
    const pares = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    let pilaAbierta = new pilaDeParentesisAbiertos()

    for (let index = 0; index < s.length; index++) {
        const char = s[index];

        if (char === "(" || char === "[" || char === "{") {
            pilaAbierta.push(char)
        } else {
            if (pilaAbierta.isEmpty()) {
                return false;
            }

            let ultimoValor = pilaAbierta.pop()

            if (pares[ultimoValor] !== char) {
                return false;
            } 
        }
    }
 return pilaAbierta.isEmpty();
};