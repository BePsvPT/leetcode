/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    let width = grid[0].length, height = grid.length;

    for (let i = Math.min(width, height); i > 0; --i) {
        for (let m = 0; m <= width - i; ++m) {
            for (let n = 0; n <= height - i; ++n) {
                let x = m, y = n, checks;

                checks = i;

                while (grid[y][x++] === 1 && --checks);

                if (checks !== 0) {
                    continue;
                }

                checks = i;

                --x;

                while (grid[y++][x] === 1 && --checks);

                if (checks !== 0) {
                    continue;
                }

                checks = i;

                --y;

                while (grid[y][x--] === 1 && --checks);

                if (checks !== 0) {
                    continue;
                }

                checks = i;

                ++x;

                while (grid[y--][x] === 1 && --checks);

                if (checks === 0) {
                    return i * i;
                }
            }
        }
    }

    return 0;
};
