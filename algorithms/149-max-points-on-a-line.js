/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const single = points.slice(1).every((point) => {
        return points[0][0] === point[0] && points[0][1] === point[1];
    });

    if (single) {
        return points.length;
    }

    let counts = {}, slopes = {}, mapping = {};

    points = points.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])).filter((point) => {
        return 1 === (counts[point] = (counts[point] || 0) + 1);
    });

    for (let current = 1; current < points.length; ++current) {
        for (let i = current - 1, unique = new Set(); i >= 0; --i) {
            let y_diff = points[current][1] - points[i][1], x_diff = points[current][0] - points[i][0];
            let slope;

            if (x_diff === 0) {
                slope = `x-axis-${points[i][0]}`;
            } else if (y_diff === 0) {
                slope = `y-axis-${points[i][1]}`;
            } else {
                slope = y_diff / x_diff;

                if (!mapping.hasOwnProperty(slope)) {
                    mapping[slope] = [];
                }

                let found = mapping[slope].find((map) => {
                    return map.nums.every((num) => {
                        return slope === (points[current][1] - num[1]) / (points[current][0] - num[0]);
                    });
                });

                if (found === undefined) {
                    mapping[slope].push(found = { key: Math.random().toString(10), nums: [points[current], points[i]] });
                }

                slope = `${slope}-${found.key}`
            }

            if (unique.has(slope)) {
                continue;
            }

            unique.add(slope);

            if (!slopes.hasOwnProperty(slope)) {
                slopes[slope] = counts[points[i]];
            }

            slopes[slope] += counts[points[current]];
        }
    }

    return Math.max(...Object.values(slopes));
};
