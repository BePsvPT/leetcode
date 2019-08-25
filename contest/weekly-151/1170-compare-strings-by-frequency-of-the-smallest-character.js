/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const q_f = queries.map((query) => {
        for (let i = 0; i < letters.length; ++i) {
            if (query.includes(letters[i])) {
                return query.split('').filter((c) => c === letters[i]).length;
            }
        }
    });

    const w_f = words.map((word) => {
        for (let i = 0; i < letters.length; ++i) {
            if (word.includes(letters[i])) {
                return word.split('').filter((c) => c === letters[i]).length;
            }
        }
    });

    return q_f.map((q) => {
        return w_f.filter((w) => w > q).length;
    })
};
