/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // return haystack.indexOf(needle);
    if (haystack.length < needle.length) return -1

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        const palabra = ""

        for (let i = 0; i <= haystack.length - needle.length; i++) {
            let palabra = "";
            for (let j = 0; j < needle.length; j++) {

                if (haystack[i + j] === needle[j]) {
                    palabra += haystack[i + j];
                } else {
                    break;
                }
            }

            if (needle === palabra) {
                return i;
            }
        }

        return -1;
    }
}

