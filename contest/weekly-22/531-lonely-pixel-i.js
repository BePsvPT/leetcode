/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    let result = 0
    
    for (let m = 0; m < picture.length; ++m) {
        let pos = picture[m].indexOf('B')
        
        if ((-1 === pos) || (pos !== picture[m].lastIndexOf('B'))) {
            continue
        }
        
        let bCount = 0
        
        for (let n = 0; n < picture.length; ++n) {
            if ('B' === picture[n][pos]) {
                ++bCount
            }
        }
        
        if (1 === bCount) {
            ++result
        }
    }
    
    return result
    
};
