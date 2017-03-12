/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let transforms = []
    
    for (let i = 0; i < timePoints.length; ++i) {
        let [m, s] = timePoints[i].split(':')
        
        transforms.push(parseInt(m) * 60 + parseInt(s))
    }
    
    transforms.sort((a, b) => a - b)
    
    transforms.push(transforms[0] + 1440)
    
    let min = 1401
    
    for (let i = 0; i < transforms.length - 1; ++i) {
        let temp = transforms[i+1] - transforms[i]
        
        if (temp < min) {
            min = temp
        }
    }
    
    return min
};
