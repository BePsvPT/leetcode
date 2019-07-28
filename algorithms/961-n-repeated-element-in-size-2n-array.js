/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    for (let i = 0; i < A.length; ++i) {
        if ((A[i] === A[i+1]) || (A[i] === A[i+2])) {
            return A[i];
        }
    }

    return A[0];
};
