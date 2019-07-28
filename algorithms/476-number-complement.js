/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    // https://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
    let nearestUpperPow2 = v => {
        v |= v >> 1;
        v |= v >> 2;
        v |= v >> 4;
        v |= v >> 8;
        v |= v >> 16;
        
        return ++v;
    }
    
    return nearestUpperPow2(num) - 1 - num
};
