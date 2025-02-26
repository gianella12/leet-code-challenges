/**
 * Dado un array de números y un objetivo, devuelve los índices de los dos números
 * que suman el objetivo.
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                let posiciones = [i, j];
                 return posiciones;
            }
        }
    }
};
