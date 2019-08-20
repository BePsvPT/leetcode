/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let result =  board.every((row) => {
        row = row.filter((s) => s !== '.');

        return new Set(row).size === row.length;
    });

    if (!result) {
        return false;
    }

    result = [...Array(9).keys()].every((col) => {
        const row = board.map((row) => row[col]).filter((s) => s !== '.');

        return new Set(row).size === row.length;
    });

    if (!result) {
        return false;
    }

    const groups = {};

    for (let m = 0; m < 9; ++m) {
        for (let n = 0; n < 9; ++n) {
            if (board[m][n] !== '.') {
                let section = Math.trunc(m / 3) * 3 + Math.trunc(n / 3);

                if (!groups.hasOwnProperty(section)) {
                    groups[section] = [];
                } else if (groups[section].includes(board[m][n])) {
                    return false;
                }

                groups[section].push(board[m][n]);
            }
        }
    }

    return true;
};
