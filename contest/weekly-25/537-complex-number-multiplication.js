/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    let [i1, r1] = a.split('+')
    let [i2, r2] = b.split('+')
    
    r1 = r1.slice(0, -1)
    r2 = r2.slice(0, -1)
    
    const i3 = (i1 * i2) + (r1 * r2 * -1)
    const r3 = (i1 * r2) + (i2 * r1)
    
    return `${i3}+${r3}i`
};
