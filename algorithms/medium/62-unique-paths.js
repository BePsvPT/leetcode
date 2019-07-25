/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let map = new Array(m), p, q;

    for (p = 0; p < m; ++p) {
        map[p] = new Array(n);
        map[p][0] = 1;
    }

    for (q = 0; q < n; ++q) {
        map[0][q] = 1;
    }

    for (q = 1; q < n; ++q) {
        for (p = 1; p < m; ++p) {
            map[p][q] = map[p][q-1] + map[p-1][q];
        }    
    }

    return map[m-1][n-1];
};
