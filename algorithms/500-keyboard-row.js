/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const hash = {
        q: 4, w: 4, e: 4, r: 4, t: 4, y: 4, u: 4, i: 4, o: 4, p: 4,
        a: 2, s: 2, d: 2, f: 2, g: 2, h: 2, j: 2, k: 2, l: 2,
        z: 1, x: 1, c: 1, v: 1, b: 1, n: 1, m: 1
    }
    
    return words.filter(val => {
        let row = 7
        
        for (let i = 0; i < val.length; ++i) {
            row &= hash[val[i].toLowerCase()]
        }
        
        return 0 !== row
    })
};
