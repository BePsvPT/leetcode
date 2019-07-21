/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let m, n;
    let pairs = 0;

    for (m = 0; m < dominoes.length - 1; ++m) {
        for (n = m + 1; n < dominoes.length; ++n) {
            if (dominoes[m][0] === dominoes[n][0] && dominoes[m][1] === dominoes[n][1]) {
                ++pairs;
            } else if (dominoes[m][0] === dominoes[n][1] && dominoes[m][1] === dominoes[n][0]) {
                ++pairs;
            }
        }
    }

    return pairs;
};
