/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const water = [], land = [];

    grid.forEach((row, y) => {
        row.forEach((val, x) => {
            if (1 === val) {
                land.push([y, x]);
            } else {
                water.push([y, x]);
            }
        });
    });

    if (!water.length || !land.length) {
        return -1;
    }

    let max = -1;

    water.forEach((w) => {
        const distances = land.map((l) => {
            return Math.abs(w[0] - l[0]) + Math.abs(w[1] - l[1]);
        });

        const distance = Math.min(...distances);

        if (distance > max) {
            max = distance;
        }
    });

    return max;
};
