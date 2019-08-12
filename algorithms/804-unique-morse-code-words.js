/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const maps = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    const transformed = words.map((word) => {
        return word.split('').map((char) => maps[char.charCodeAt(0) - 97]).join('');
    });

    return new Set(transformed).size;
};
