/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    let board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
    let map = {};
    let result = [];

    for (let m = 0; m < 6; ++m) {
        for (let n = 0; n < 5; ++n) {
            map[board[m][n]] = [m, n];

            if (m === 5) {
                break;
            }
        }
    }

    for (let c = 0, current = [0, 0]; c < target.length; ++c) {
        let x = map[target[c]][1] - current[1], y = map[target[c]][0] - current[0];
        let x_axis = (x > 0 ? 'R' : 'L').repeat(Math.abs(x));
        let y_axis = (y > 0 ? 'D' : 'U').repeat(Math.abs(y));

        if (target[c] === 'z') {
            result.push(x_axis, y_axis, '!');
        } else {
            result.push(y_axis, x_axis, '!');
        }

        current = [map[target[c]][0], map[target[c]][1]];
    }

    return result.join('');
};
