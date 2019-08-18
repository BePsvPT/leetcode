/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
    const sets = 'zyxwvutsrqponmlkjihgfedcba';
    const candidates = [];

    for (let i = 0; i < sets.length; ++i) {
        let idx = -1;

        while ((idx = s.indexOf(sets[i], idx + 1)) > -1) {
            candidates.push(s.substring(idx));
        }

        if (candidates.length > 0) {
            candidates.sort();

            return candidates[candidates.length - 1];
        }
    }
};
