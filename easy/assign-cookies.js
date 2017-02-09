/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let sortNumber = (a, b) => {
        return a - b;
    }
    
    let n = -1, result = 0
    
    g = g.sort(sortNumber)
    s = s.sort(sortNumber)
    
    while (g.length && (s.length || -1 !== n)) {
        if (-1 === n) {
            n = s.pop()
        }
        
        if (n >= g.pop()) {
            ++result
            
            n = -1
        }
    }
    
    return result
};
