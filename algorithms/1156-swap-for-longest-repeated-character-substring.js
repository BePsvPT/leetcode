/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
    const chars = {};

    text = text.split('');

    Array.from(new Set(text)).forEach((letter) => {
        let idx = text[0] === letter ? 0 : -1, gap = 0;

        chars[letter] = text[0] === letter ? [0] : [];

        text.forEach((char) => {
            if (char !== letter) {
                ++gap;
            } else {
                if (gap > 0) {
                    chars[letter].push(gap === 1, 0);
                    gap = 0;
                    idx += 2;
                }

                ++chars[letter][idx];
            }
        });
    });

    const longests = Object.keys(chars).map((letter) => {
        if (typeof chars[letter][0] === 'boolean') {
            chars[letter].shift();
        }

        if (chars[letter].length === 1) {
            return chars[letter][0];
        }

        let max = 0, temp;

        for (let i = 0; i < chars[letter].length - 1; i += 2) {            
            if (chars[letter][i+1] === false) {
                temp = Math.max(chars[letter][i], chars[letter][i+2]) + 1;
            } else {
                temp = chars[letter][i] + chars[letter][i+2] + (chars[letter].length > 3 ? 1 : 0);
            }

            if (temp > max) {
                max = temp;
            }
        }

        return max;
    });

    return Math.max(...longests);
};
