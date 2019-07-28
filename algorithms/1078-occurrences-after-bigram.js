/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let target = first + ' ' + second, pos = -1, result = [];

    while ((pos = text.indexOf(target, pos)) > -1) {
        let start = pos + target.length + 1;
        let end = text.indexOf(' ', start + 1);

        if (end < 0) {
            end = text.length;
        }

        result.push(text.substring(start, end));

        pos += target.length;
    }

    return result.filter((s) => s.length);
};
