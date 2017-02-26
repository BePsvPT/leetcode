/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    return d.reduce((acc, val) => {
        let copy = s
        let count = 0
        
        for (let i = 0, pos = -1; i < val.length; ++i) {
            if (-1 === (pos = copy.indexOf(val[i], pos + 1))) {
                return acc
            }
            
            ++count
        }
        
        if (count > acc.length) {
            return val
        } else if (count === acc.length && acc.localeCompare(val) > 0) {
            return val
        }
        
        return acc
    }, '')
};
