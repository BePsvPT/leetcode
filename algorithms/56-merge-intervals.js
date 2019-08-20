/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length) {
        return [];
    }

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];

    let left = intervals[0][0], right = intervals[0][1];

    for (let i = 1; i < intervals.length; ++i) {
        if (intervals[i][0] <= right) {
            if (intervals[i][1] > right) {
                right = intervals[i][1];
            }
        } else {
            result.push([left, right]);
            left = intervals[i][0];
            right = intervals[i][1];
        }
    }

    result.push([left, right]);

    return result;
};
