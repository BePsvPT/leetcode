/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const map = {};

    chars.split('').forEach((c) => {
        map[c] = (map[c] || 0) + 1;
    });

    const good = words.filter((word) => {
        const map_clone = JSON.parse(JSON.stringify(map));

        for (let i = 0; i < word.length; ++i) {
            if (!map_clone.hasOwnProperty(word[i])) {
                return false;
            } else if (map_clone[word[i]] <= 0) {
                return false;
            }

            --map_clone[word[i]];
        }

        return true;
    });

    return good.map((w) => w.length).reduce((acc, val) => acc + val, 0);
};
