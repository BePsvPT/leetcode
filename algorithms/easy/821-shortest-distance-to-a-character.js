/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let distances = [], current = -10002, next;

    while ((next = S.indexOf(C, current + 1)) > -1) {
        for (let i = Math.max(current, 0); i < next; ++i) {
            distances.push(Math.min(i - current, next - i));
        }

        current = next;
    }

    while (distances.length < S.length) {
        distances.push(++next);
    }

    return distances;
};
