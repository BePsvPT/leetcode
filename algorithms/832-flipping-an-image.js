/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map((row) => {
        return row.reverse().map((num) => {
            return num === 1 ? 0 : 1;
        });
    });
};
