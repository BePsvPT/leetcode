/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let i = A.indexOf(0);

    if (i > -1 && A.includes(0, i + 1)) {
        return 0;
    }

    for (i = 0; i < A.length; ++i) {
        if ((A[i] / A[i+1]) === 1 || (A[i] / A[i+2]) === 1) {
            return A[i];
        }
    }

    return A[0];
};
