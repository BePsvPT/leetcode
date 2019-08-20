/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (!intervals.length) {
        return [newInterval];
    }

    let idx = intervals.findIndex((el) => el[0] > newInterval[0]);

    if (idx === -1) {
        intervals.push(newInterval);
        idx = 1;
    } else {
        intervals.splice(idx, 0, newInterval);    
    }

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
