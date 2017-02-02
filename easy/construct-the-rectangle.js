/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let l = Math.ceil(Math.sqrt(area))
    
    do {
        if (0 === (area % l)) {
            return [l, area/l]
        }
    } while (++l)
};
